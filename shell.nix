{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell { buildInputs = with pkgs; [ elixir_1_12 nodejs-16_x ]; }
