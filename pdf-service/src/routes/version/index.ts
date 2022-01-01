import type {
  FastifyPluginCallback,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import cp from 'child_process';

const plugin: FastifyPluginCallback = (server, _, next) => {
  server.get("/", async (req: FastifyRequest, res: FastifyReply) => {
	const version = cp.execSync('git rev-parse HEAD').toString().trim().slice(0, 7);

    res.code(200).send({
        version
    })
  });

  next();
};

export default plugin;
