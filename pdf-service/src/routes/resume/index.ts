import playwright from "playwright";
import fs from 'fs'
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
    const websiteDomain = "https://hugosum.me";
    //  const websiteDomain = process.env.FRONTEND_URL;

    const versionRes = await fetch(websiteDomain + "/api/version");

    if (!versionRes.ok) {
      res.code(503).send({
        message:
          "My portfolio website is down right now. Please try again later",
      });
    }

    // REF No generic for json() or fetch()
    const { generated_at, version } = (await versionRes.json()) as IVersion;

    console.log('check value', generated_at, lastGeneratedAt)

    if (generated_at > lastGeneratedAt) {
      console.log('first condition')
      const browserType = playwright.chromium;
      const browser = await browserType.launch();
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto("https://hugosum.me/pages/resume");
      const pdf = await page.pdf({ format: "A4" });
      await fs.promises.writeFile('./resume-hugosum.pdf', pdf);
      await browser.close();

      lastGeneratedAt = generated_at

      res.code(200).type("application/pdf").send(pdf);
    } else {
      console.log('not bigger than')
      const pdf = await fs.promises.readFile('./resume-hugosum.pdf')
      res.code(200).type("application/pdf").send(pdf);
    }
  });

  next();
};

export default plugin;
