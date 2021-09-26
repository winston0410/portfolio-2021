{
  description = "Flake for my portfolio";

  outputs = { self, nixpkgs }:
    let system = "x86_64-linux";
    in {
      devShell.${system} = (({ pkgs, ... }:
        pkgs.mkShell {
          buildInputs = with pkgs; [
            nodePackages.node2nix
            nodejs
          ];

          shellHook = ''
          '';
        }) { pkgs = nixpkgs.legacyPackages.${system}; });
    };
}
