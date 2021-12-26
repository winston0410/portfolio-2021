// NOTE Need to use serverless version as Vercel doesn't support custom binaries
//  import playwright from 'playwright';
//  import playwright from 'playwright-aws-lambda';
import playwright from 'playwright-core';
import chromium from 'chrome-aws-lambda';
import fs from 'fs';

(async function () {
	const resumePage = fs.readFileSync('./build/pages/resume/index.html', 'utf8');

	const browser = await playwright.chromium.launch({
		args: chromium.args,
		executablePath: await chromium.executablePath,
		headless: chromium.headless
	});

	const context = await browser.newContext();
	const page = await context.newPage();
	await page.setContent(resumePage);

	await page.pdf({
		path: './build/resume.pdf',
		format: 'A4'
	});

	console.log('PDF generated successfully!');

	await browser.close();
})();

// REF TS1208
export default null;
