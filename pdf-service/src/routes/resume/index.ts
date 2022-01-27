import playwright from "playwright-core";
import fs from "fs";
import fetch from "node-fetch";
import type {
  FastifyPluginCallback,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import PDFMerger from 'pdf-merger-js';

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
      const executablePath = playwright.chromium.executablePath();

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
          executablePath,
        });

        const captureOpts = {
            format: "A4",
            scale: 1
            //  preferCSSPageSize: true
        };

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(websiteDomain + "/pages/resume");
        const resume = await page.pdf(captureOpts);
        await page.goto(websiteDomain + "/pages/commercial");
        const commercials = await page.pdf(captureOpts);
        await browser.close();

        const merger = new PDFMerger();

        merger.add(resume)
        merger.add(commercials)

        const buf = await merger.saveAsBuffer()

        res.code(200).type("application/pdf").send(buf);

        // NOTE Write file after sending response to reduce response time
        await fs.promises.writeFile("/tmp/resume-hugosum.pdf", buf);
        lastGeneratedAt = generated_at;
      } else {
        const pdf = await fs.promises.readFile("/tmp/resume-hugosum.pdf");
        res.code(200).type("application/pdf").send(pdf);
      }
    } catch (error) {
      console.log("Error!: ", error);
      res.code(500).send({ message: error });
    }
  });

  next();
};

export default plugin;
