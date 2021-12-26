import playwright from 'playwright';
import fs from 'fs';

(async function () {
	const resumePage = fs.readFileSync('./build/pages/resume/index.html', 'utf8');

	const browser = await playwright.chromium.launch();
	const context = await browser.newContext();
	const page = await context.newPage();
	await page.setContent(resumePage);

	await page.pdf({
		path: './build/resume.pdf',
		format: 'A4',
	});

    console.log('PDF generated successfully!')

	await browser.close();
})();

// REF TS1208
export default null;
