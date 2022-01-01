# NOTE Using parent directory as build context, as we need .git to get the commit hash into a file
FROM mcr.microsoft.com/playwright:v1.17.1

COPY ./pdf-service/package.json ./pdf-service/package-lock.json ./

RUN npm install

COPY ./pdf-service ./.

RUN npm run build

ENV PLAYWRIGHT_CHROMIUM_PATH=/ms-playwright/chromium-939194/chrome-linux/chrome

COPY ./.git ./.

RUN git rev-parse HEAD > /tmp/.version

CMD ["node", "./dist/index.js"]
