import playwright from "playwright-core";
import fs from "fs";
import fetch from "node-fetch";
import type {
  FastifyPluginCallback,
  FastifyReply,
  FastifyRequest,
} from "fastify";

type IVersion = {
  generated_at: number;
  version: string;
};

let lastGeneratedAt = -1;

const plugin: FastifyPluginCallback = (server, _, next) => {
  server.get("/", async (req: FastifyRequest, res: FastifyReply) => {
    // FIXME use process.env.FRONTEND_URL later. Estrella not picking up env correctly right now;
    try {
      const websiteDomain = "https://hugosum.me";
      //  const executablePath = process.env.PLAYWRIGHT_CHROMIUM_PATH || playwright.chromium.executablePath()
      const executablePath = playwright.chromium.executablePath()

      const versionRes = await fetch(websiteDomain + "/api/version");

      if (!versionRes.ok) {
        res.code(503).send({
          message:
            "My portfolio website is down right now. Please try again later",
        });
      }

      // REF No generic for json() or fetch()
      const { generated_at, version } = (await versionRes.json()) as IVersion;

      if (generated_at > lastGeneratedAt) {
        const browserType = playwright.chromium;
        const browser = await browserType.launch({
            headless: true,
            executablePath
        });

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://hugosum.me/pages/resume");
        const pdf = await page.pdf({ format: "A4" });
        await browser.close();

        res.code(200).type("application/pdf").send(pdf);
        
        // NOTE Write file after sending response to reduce response time
        await fs.promises.writeFile("/tmp/resume-hugosum.pdf", pdf);
        lastGeneratedAt = generated_at;
      } else {
        const pdf = await fs.promises.readFile("/tmp/resume-hugosum.pdf");
        res.code(200).type("application/pdf").send(pdf);
      }
    } catch (error) {
      console.log("Error!: ", error)
      res.code(500).send({ message: error });
    }
  });

  next();
};

export default plugin;
