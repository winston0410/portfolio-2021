{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell { buildInputs = with pkgs; [ elixir_1_10 nodejs-16_x ]; }
