import React from 'react';

export default function NetworkBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-accent-green/5 blur-[100px] mix-blend-multiply" />
      <div className="absolute top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full bg-accent-green/5 blur-[80px] mix-blend-multiply" />
    </div>
  );
}
