import type {
  FastifyPluginCallback,
  FastifyReply,
  FastifyRequest,
} from "fastify";

const plugin: FastifyPluginCallback = (server, _, next) => {
  server.get("/", async (req: FastifyRequest, res: FastifyReply) => {
    const version = process.env.LAST_COMMIT_HASH

    res.code(200).send({
        version
    })
  });

  next();
};

export default plugin;
