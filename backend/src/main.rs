mod routes;
mod types;

use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};

async fn manual_hello() -> impl Responder {
    // backend::routes::tools::setup();
    HttpResponse::Ok().body("Hey there!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    routes::tools::setup();
    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(manual_hello))
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}
