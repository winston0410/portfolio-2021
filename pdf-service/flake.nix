{
  description = "Flake for my portfolio";

  inputs = {
    nixpkgs = { url = "github:nixos/nixpkgs/nixos-unstable"; };
    # mkNodePackage = { url = "github:winston0410/mkNodePackage/develop"; };
    mkNodePackage = { url = "path:/home/hugosum/mkNodePackage"; };
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
      defaultPackage = (mkNodePackage.lib.${system}.mkNodePackage {
        pname = "portfolio-pdf-service";
        version = "1.0.0";
        src = ./.;

        buildInputs = with pkgs; [ esbuild ];

        buildPhase = ''
          npm run build
        '';

        installPhase = ''
          mkdir -p "$out"
          ls -a ./node_modules/ws
          cp -r dist "$out"
          # Esbuild doesn't resolve require.resolve() module correctly right now
          mkdir -p "$out"/node_modules
          cp -r ./node_modules/ws "$out"/node_modules/ws
        '';
      });
    in {
      defaultPackage.${system} = defaultPackage;
      packages.${system} = {
        default = defaultPackage;
        image = pkgs.callPackage ./image.nix { package = defaultPackage; };
      };
      devShell.${system} = (({ pkgs, ... }:
        pkgs.mkShell {
          buildInputs = with pkgs; [
            # For compatibility with Vercel
            yarn
            nodejs-16_x
            google-chrome-dev
            firefox-bin
          ];

          shellHook = ''
            ${fix-playwright-browsers.outPath}/fix-playwright-browsers
            source .env
          '';
        }) { inherit pkgs; });
    };
}
