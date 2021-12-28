import playwright from "playwright";
//  import fs from 'fs'

export default function indexRoute(server, options, next) {
  server.get("/", async (req, res) => {
    const browserType = playwright.chromium;
    const browser = await browserType.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://hugosum.me/pages/resume");
    const pdf = await page.pdf({ format: 'A4' });
    //  await fs.promises.writeFile('./resume-hugosum.pdf', pdf);
    await browser.close();
    
    res.code(200).type("application/pdf").send(pdf);
  });

  next();
}
