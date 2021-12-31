# { pkgs, package, fix-playwright-browsers, ... }:
# pkgs.dockerTools.buildImage {
# name = "portfolio-pdf";
# tag = "latest";
# contents = with pkgs; [
# nodejs-16_x
# bash
# coreutils
# google-chrome-dev
# which
# ripgrep
# patchelf
# ];
# runAsRoot = ''
# #NOTE Somehow alias doesn't work here
# cp ${pkgs.ripgrep}/bin/rg /bin/grep

# mkdir -p /home/.cache
# HOME="/home"

# npx playwright install

# # ${fix-playwright-browsers.outPath}/fix-playwright-chromium
# exit 1
# '';
# config = {
# Env = [
# "PLAYWRIGHT_CHROMIUM_PATH=/ms-playwright/chromium-920619/chrome-linux/chrome"
# ];
# Cmd = [ "${pkgs.nodejs-16_x}/bin/node" "${package}/dist/index.js" ];
# };
# }

# { pkgs, package, fix-playwright-browsers, ... }:
# let
# playwright = pkgs.dockerTools.pullImage {
# imageName = "mcr.microsoft.com/playwright";
# imageDigest =
# "sha256:776f868d63ff001fd8d17a7cfd4ff4fd5dfd6f3d07aec457232d0ced53e64ef6";
# sha256 = "sha256-BdLuTD/YggLMF62dZ2K93okOXACaWH7xuZlPYW4QRwU=";
# };
# in pkgs.dockerTools.buildLayeredImage {
# name = "portfolio-pdf";
# tag = "latest";
# fromImage = playwright;
# contents = with pkgs; [ nodejs-16_x bash coreutils ];
# config = {
# Env = [
# "PLAYWRIGHT_CHROMIUM_PATH=/ms-playwright/chromium-920619/chrome-linux/chrome"
# ];
# Cmd = [ "${pkgs.nodejs-16_x}/bin/node" "${package}/dist/index.js" ];
# };
# }

#NOTE Doesn't work somehow, as Playwright can only work with bundled chromium
{ pkgs, package, ... }:
pkgs.dockerTools.buildImage {
  name = "portfolio-pdf";
  tag = "latest";
  contents = with pkgs; [ nodejs-16_x bash coreutils chromium];
  runAsRoot = ''
      mkdir -p /tmp
  '';
  config = {
    Env = [
        "PLAYWRIGHT_CHROMIUM_PATH=${pkgs.chromium}/bin/chromium"
    ];
    Cmd = [ "${pkgs.nodejs-16_x}/bin/node" "${package}/dist/index.js" ];
  };
}
