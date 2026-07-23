import express, { type Express } from "express";
import cors from "cors";
import type { IncomingMessage, ServerResponse } from "node:http";
import router from "./routes";
import { logger } from "./lib/logger";

// pino-http is a CJS package; under "moduleResolution: bundler" its default
// export lacks call signatures in the TS type system. Import the type
// separately and cast so tsc is satisfied while esbuild handles the interop.
import type { HttpLogger, Options as PinoHttpOptions } from "pino-http";
import pinoHttpImport from "pino-http";
const pinoHttp = pinoHttpImport as unknown as (
  opts: PinoHttpOptions,
) => HttpLogger;

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: IncomingMessage & { id?: string | number }) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: ServerResponse) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
