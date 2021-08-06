{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell { buildInputs = with pkgs; [ elixir_1_11 nodejs-16_x cargo rustc]; }
