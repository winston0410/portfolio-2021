import fastify from 'fastify';
import path from 'path'
import autoload from "fastify-autoload";

function createServer() {
  const server = fastify({ logger: { prettyPrint: true } });
    server.register(autoload, {
    dir: path.join(__dirname, "routes"),
  });

  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString());
    res.send({ error });
  });

  return server;
}

export default createServer;
