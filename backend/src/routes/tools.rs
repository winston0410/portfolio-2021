use crate::types::response;

#[get("/")]
async fn get() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

pub fn setup(app: actix_web::App){
    // response::success();
    println!("hello world");
    app.service(get)
}
