import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

class WebGLErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {
    // Silently swallow WebGL context errors
  }
  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}

const NUM_NODES = 50;
const CONNECTION_DISTANCE = 4;

function NetworkGeometry() {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);

  const { positions, colors, isAmber, velocities } = useMemo(() => {
    const pos = new Float32Array(NUM_NODES * 3);
    const col = new Float32Array(NUM_NODES * 3);
    const amberFlags = new BooleanArray(NUM_NODES);
    const vel = [];

    const amberColor = new THREE.Color('#FF7A1A');
    const tealColor = new THREE.Color('#14B8AE');

    for (let i = 0; i < NUM_NODES; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;

      vel.push(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      );

      const isHub = Math.random() < 0.15;
      amberFlags[i] = isHub;
      
      const c = isHub ? amberColor : tealColor;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return { positions: pos, colors: col, isAmber: amberFlags, velocities: vel };
  }, []);

  const { lines } = useMemo(() => {
    const l = [];
    for (let i = 0; i < NUM_NODES; i++) {
      for (let j = i + 1; j < NUM_NODES; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (dist < CONNECTION_DISTANCE) {
          l.push({ i, j, dist });
        }
      }
    }
    return { lines: l };
  }, [positions]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    const visibilityHandler = () => {
      setIsVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', visibilityHandler);
    
    return () => {
      mediaQuery.removeEventListener('change', handler);
      document.addEventListener('visibilitychange', visibilityHandler);
    };
  }, []);

  useFrame((state, delta) => {
    if (!isVisible || prefersReducedMotion) return;

    // Mouse parallax
    const targetX = (state.pointer.x * Math.PI) * 0.05;
    const targetY = (state.pointer.y * Math.PI) * 0.05;
    
    if (groupRef.current) {
      groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
    }

    // Node drifting
    if (pointsRef.current) {
      const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < NUM_NODES; i++) {
        pos[i * 3] += velocities[i * 3];
        pos[i * 3 + 1] += velocities[i * 3 + 1];
        pos[i * 3 + 2] += velocities[i * 3 + 2];

        // Bounds wrapping
        if (pos[i * 3] > 10 || pos[i * 3] < -10) velocities[i * 3] *= -1;
        if (pos[i * 3 + 1] > 10 || pos[i * 3 + 1] < -10) velocities[i * 3 + 1] *= -1;
        if (pos[i * 3 + 2] > 0 || pos[i * 3 + 2] < -10) velocities[i * 3 + 2] *= -1;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  // Calculate line positions dynamically would be expensive, 
  // keeping lines static to their original points for simplicity but adjusting transparency
  // Actually, for lines to follow drifting points, we need to update line geometry
  // A Custom ShaderMaterial is better for lines but complex. 
  // Let's use LineSegments for performance.
  
  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(lines.length * 6);
    const col = new Float32Array(lines.length * 6);
    
    const tc = new THREE.Color('#14B8AE');
    
    for (let i = 0; i < lines.length; i++) {
      // colors
      col[i * 6] = tc.r; col[i * 6 + 1] = tc.g; col[i * 6 + 2] = tc.b;
      col[i * 6 + 3] = tc.r; col[i * 6 + 4] = tc.g; col[i * 6 + 5] = tc.b;
    }
    
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    return geo;
  }, [lines]);

  useFrame(() => {
    if (!isVisible || prefersReducedMotion) return;
    
    if (pointsRef.current) {
      const p = pointsRef.current.geometry.attributes.position.array;
      const lp = lineGeometry.attributes.position.array as Float32Array;
      
      for (let k = 0; k < lines.length; k++) {
        const i = lines[k].i;
        const j = lines[k].j;
        
        lp[k * 6] = p[i * 3];
        lp[k * 6 + 1] = p[i * 3 + 1];
        lp[k * 6 + 2] = p[i * 3 + 2];
        
        lp[k * 6 + 3] = p[j * 3];
        lp[k * 6 + 4] = p[j * 3 + 1];
        lp[k * 6 + 5] = p[j * 3 + 2];
      }
      lineGeometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

class BooleanArray extends Array<boolean> {
  // Utility class
}

function isWebGLSupported(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export default function NetworkBackground() {
  const [mounted, setMounted] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setWebglSupported(isWebGLSupported());
    setMounted(true);
  }, []);

  return (
    <div className={`fixed inset-0 z-[-1] bg-background transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      {webglSupported && (
        <WebGLErrorBoundary>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            dpr={[1, Math.min(window.devicePixelRatio, 2)]}
            gl={{ antialias: false, alpha: false }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#FF7A1A" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#14B8AE" />
            <React.Suspense fallback={null}>
              <NetworkGeometry />
            </React.Suspense>
          </Canvas>
        </WebGLErrorBoundary>
      )}
    </div>
  );
}
