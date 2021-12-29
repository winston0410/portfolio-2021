// NOTE Use esbuild to build the package directly, as estrella is preventing Nix build to run correctly
//
const { buildSync: build } = require('esbuild')

build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/index.js",
  bundle: true,
  platform: "node",
  minify: true,
  external: [
    //  "ws",
    "electron/index.js",
  ],
});
