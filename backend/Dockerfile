FROM rust:alpine3.14 as build

WORKDIR /usr/app

COPY ./ ./

RUN ["cargo", "build", "--release", "--bin", "backend"]

EXPOSE 8080

FROM scratch as runtime

WORKDIR /usr/app

COPY --from=build /usr/app/target/release/backend ./backend

CMD [ "./backend" ]
