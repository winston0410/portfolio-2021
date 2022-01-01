import type {
  FastifyPluginCallback,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import fs from 'fs';

const plugin: FastifyPluginCallback = (server, _, next) => {
  server.get("/", async (req: FastifyRequest, res: FastifyReply) => {
    const version = (await fs.promises.readFile("/tmp/.version", "utf8")).slice(0,7)

    res.code(200).send({
        version
    })
  });

  next();
};

export default plugin;
