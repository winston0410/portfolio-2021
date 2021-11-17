---
layout: article
title: Stop using Dockerfile to build Docker image, use Nix
description: Nix is a better tool to build Dockerfile.
tags: { nix: true, rust: true }
---

Docker is something we all use these days for deployment, as it is easy to deploy with an image and get expected result in production environment, isolated with other applications running in the server.

Despite Docker is great for containerize applications, it **may not be reproducible**. An image will yield identical result, but building an image from a `Dockerfile` could be inconsistent. It requires special care from the developer to achieve this ideal.

Nix is well-known for its ability to build packages in a reproducible way, yet it can actually be used to build Docker image as well.

By using Nix to build Docker image, you can expect your image to be time-proof.

## What is Nix?

It is difficult to describe Nix as it can do many things now. It was originally designed for building packages in a **deterministic and reproducible** way. Over the years, it has been developed into a [package manager](https://github.com/NixOS/nixpkgs), [Linux distro](https://nixos.org/), [devops toolkit](https://github.com/NixOS/nixops) and many more.

## A practical example why Nix is better than Dockerfile

I came across this excellent lightweight alternative to ElasticSearch, [MeiliSearch](https://github.com/meilisearch/MeiliSearch) last month. It is written in Rust, and has a Docker image ready to use.

```sh
docker run -p 7700:7700 -v "$(pwd)/data.ms:/data.ms" getmeili/meilisearch
```

Out of curosity, I skimmed the [`Dockerfile`](https://github.com/meilisearch/MeiliSearch/blob/eb91f27b656d2f826e7a9c9343438bd16bbec255/Dockerfile) of the repository.

```Dockerfile
# Compile
FROM    alpine:3.14 AS compiler

RUN     apk update --quiet \
        && apk add -q --no-cache curl build-base

RUN     curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

WORKDIR /meilisearch

COPY    Cargo.lock .
COPY    Cargo.toml .

COPY    meilisearch-error/Cargo.toml meilisearch-error/
COPY    meilisearch-http/Cargo.toml meilisearch-http/
COPY    meilisearch-lib/Cargo.toml meilisearch-lib/

ENV     RUSTFLAGS="-C target-feature=-crt-static"

# Create dummy main.rs files for each workspace member to be able to compile all the dependencies
RUN     find . -type d -name "meilisearch-*" | xargs -I{} sh -c 'mkdir {}/src; echo "fn main() { }" > {}/src/main.rs;'
# Use `cargo build` instead of `cargo vendor` because we need to not only download but compile dependencies too
RUN     $HOME/.cargo/bin/cargo build --release
# Cleanup dummy main.rs files
RUN     find . -path "*/src/main.rs" -delete

ARG     COMMIT_SHA
ARG     COMMIT_DATE
ENV     COMMIT_SHA=${COMMIT_SHA} COMMIT_DATE=${COMMIT_DATE}

COPY    . .
RUN     $HOME/.cargo/bin/cargo build --release

# Run
FROM    alpine:3.14

ARG     USER=meili
ENV     HOME /home/${USER}
ENV     MEILI_HTTP_ADDR 0.0.0.0:7700
ENV     MEILI_SERVER_PROVIDER docker

# download runtime deps as root and create ${USER}
RUN     apk update --quiet \
        && apk add -q --no-cache libgcc tini curl \
        && adduser -D ${USER}
WORKDIR ${HOME}
USER    ${USER}
# copy file as ${USER} to ${HOME}
COPY    --from=compiler /meilisearch/target/release/meilisearch .

EXPOSE  7700/tcp

ENTRYPOINT ["tini", "--"]
CMD     ./meilisearch
```

This image is built with a multi-stage build technique. The instruction for compiling the project is defined first, and then the environment for running the binary.

There are a few issues here:

- the logic for building the binary is **procedual**. It **cannot be reused** without copy and paste.

- `apk` is used for installing dependencies. As there is no pinning in `apk`. This image may yield unexpected result overtime, as the latest package is fetched. This is not **reproducible**.

- There **might be bloat** in the image as `alpine` is used as the base instead of `scratch`.

## Build the image with Nix

We are going to start off with a very simple Nix Flake template. This is what you get by running `nix flake init`.

```nix
# flake.nix
{
  description = "A very basic flake";

  outputs = { self, nixpkgs }: {

    packages.x86_64-linux.hello = nixpkgs.legacyPackages.x86_64-linux.hello;

    defaultPackage.x86_64-linux = self.packages.x86_64-linux.hello;

  };
}
```

`defaultPackage` is the derivation that we can build with `nix build .#`. We are going to build the project and the image there.
