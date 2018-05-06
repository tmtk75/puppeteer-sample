import { launch } from 'puppeteer';

const url = process.argv[2] || 'https://example.com';

(async () => {
  const browser = await launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
