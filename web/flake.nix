{
  description = "Flake for my portfolio";

  inputs = {
    nixpkgs = { url = "github:nixos/nixpkgs/nixos-unstable"; };
    mkNodePackage = { url = "github:winston0410/mkNodePackage/develop"; };
  };

  outputs = { nixpkgs, mkNodePackage, ... }:
    let system = "x86_64-linux";
    in {
      defaultPackage.${system} = (mkNodePackage.lib.${system}.mkNodePackage {
        pname = "hugo-porfolio";
        version = "1.0.0";
        src = ./.;

        buildPhase = ''
          npm run build
        '';

        installPhase = ''
          mkdir -p $out
          cp -r build $out 
        '';
      });
      devShell.${system} = (({ pkgs, ... }:
        pkgs.mkShell {
          buildInputs = with pkgs;
            [
              # For compatibility with Vercel
              nodejs-16_x
              pandoc
            ];

          shellHook = "";
        }) { pkgs = nixpkgs.legacyPackages.${system}; });
    };
}
