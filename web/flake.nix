{
  description = "Flake for my portfolio";

  inputs = {
    nixpkgs = { url = "github:nixos/nixpkgs/nixos-unstable"; };
    mkNodePackage = { url = "github:winston0410/mkNodePackage/develop"; };
    fix-playwright-browsers = {
      url = "github:winston0410/nixos-playwright/master";
      flake = false;
    };
  };

  outputs = { nixpkgs, mkNodePackage, fix-playwright-browsers, ... }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
        config.allowUnfree = true;
      };
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
          buildInputs = with pkgs; [
            # For compatibility with Vercel
            nodejs-16_x
            python311
          ];

          shellHook = ''
          ${fix-playwright-browsers.outPath}/fix-playwright-browsers
          '';
        }) { inherit pkgs; });
    };
}
