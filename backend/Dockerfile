FROM lukemathwalker/cargo-chef:latest-rust-1.53.0 as recipe

WORKDIR /usr/app

COPY ./ ./

RUN ["cargo", "chef", "prepare", "--recipe-path", "recipe.json"]

FROM lukemathwalker/cargo-chef:latest-rust-1.53.0 as cook

WORKDIR /usr/app

COPY --from=recipe /usr/app/recipe.json ./recipe.json

RUN ["cargo", "chef", "cook", "--release", "--recipe-path", "recipe.json"]

#  Not use alpine here, as cargo is not included in alpine
FROM rust:1.54.0 as build

WORKDIR /usr/app

COPY --from=cook /usr/app/target ./target

COPY --from=cook $CARGO_HOME $CARGO_HOME

COPY ./ ./

RUN ["cargo", "build", "--release", "--bin", "backend"]

FROM scratch as runtime
#  FROM rust:1.54.0 as runtime

WORKDIR /usr/app

COPY --from=build /usr/app/target/release/backend ./backend

CMD [ "./backend" ]

EXPOSE 8080
