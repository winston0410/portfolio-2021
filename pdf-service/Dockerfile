FROM mcr.microsoft.com/playwright:v1.17.1

COPY package.json package-lock.json ./

RUN npm install

COPY ./. ./.

RUN npm run build

ENV PLAYWRIGHT_CHROMIUM_PATH=/ms-playwright/chromium-939194/chrome-linux/chrome

CMD ["node", "./dist/index.js"]
