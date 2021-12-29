{ pkgs, package, ... }:
pkgs.dockerTools.buildLayeredImage {
  name = "portfolio-pdf";
  tag = "latest";
  contents = with pkgs; [ nodejs-16_x google-chrome-dev firefox-bin ];
  config = { Cmd = [ "node ${package}/dist/index.js" ]; };
}
