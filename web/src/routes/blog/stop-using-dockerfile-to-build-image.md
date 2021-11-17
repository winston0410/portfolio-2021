---
layout: article
title: Stop using Dockerfile to build Docker image, use Nix
description: Nix is a better tool to build Dockerfile.
tags: { nix: true, rust: true }
---

## What is Nix?

It is difficult to describe Nix as it can do many things now. It was originally designed for building packages in a deterministic and reproducible way. With that properties, it has been developed into a Linux distro, Devops toolkit and many more.

## A practical example why Nix is better than Dockerfile

I came across this excellent lightweight alternative to ElasticSearch, [MeiliSearch](https://github.com/meilisearch/MeiliSearch) last month. It is written in Rust, and has a Docker image ready to use.

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

This image is built with a multi-stage build technique. The instruction for compiling the project is defined first, and then the enviornemnt for running the binary correctly.

There are a few issues here:

- the logic for building the binary is **procedual**. It **cannot be reused** without copy and paste.

- the logic for building the binary is not automatically **untested**.
