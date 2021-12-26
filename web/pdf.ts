import playwright from 'playwright'

(async function () {
    const broswer = await playwright.chromium.launch()

    await broswer.close()
})();

// REF TS1208
export default null;
