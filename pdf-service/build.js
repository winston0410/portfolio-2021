#!/usr/bin/env node
const { build } = require("estrella");
build({
  entry: "src/index.ts",
  outfile: "dist/index.js",
  bundle: true,
  platform: "node",
  external: [
    "ws",
    "node:https",
    "node:http",
    "node:path",
    "node:util",
    "electron/index.js",
  ],
});
