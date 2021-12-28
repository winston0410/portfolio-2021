import fastify from "fastify";
// NOTE esbuild doesn't work with autoload
//  import path from "path";
//  import autoload from "fastify-autoload";
//  server.register(autoload, {
//  dir: path.resolve(__dirname, "routes"),
//  });
import resumeRoute from "./routes/resume/index";

function createServer() {
  const server = fastify({ logger: { prettyPrint: true } });
  server.register(resumeRoute, {
    prefix: "/resume",
  });

  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString());
    res.send({ error });
  });

  return server;
}

export default createServer;
