use axum::{debug_handler, extract::State, http::StatusCode, routing::get, Json, Router};
use bb8::Pool;
use bb8_postgres::PostgresConnectionManager;
use tokio_postgres::NoTls;
use users::{CreateUser, User};
pub mod users;
#[tokio::main]
async fn main() {
    let manager = PostgresConnectionManager::new_from_stringlike(
        "host=localhost user=postgres password=postgres port=5433  dbname=md_db ",
        NoTls,
    )
    .unwrap();
    let pool = Pool::builder().build(manager).await.unwrap();

    let app = Router::new()
        .route("/", get(|| async { "Hello World!" }))
        .route("/api/users", get(get_users).post(post_users))
        .with_state(pool);

    axum::Server::bind(&"0.0.0.0:8080".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
type ConnectionPool = Pool<PostgresConnectionManager<NoTls>>;

async fn get_users(
    State(pool): State<ConnectionPool>,
) -> Result<Json<Vec<User>>, (StatusCode, String)> {
    let connection = pool.get().await.map_err(|e| internal_error(e))?;

    let result = connection
        .query("SELECT * FROM users", &[])
        .await
        .map_err(|e| internal_error(e))?;

    let mut users = Vec::new();

    for row in result.iter() {
        users.push(User::new(
            row.get("user_id"),
            row.get("username"),
            row.get("created_at"),
            row.get("email"),
        ));
    }

    Ok(Json(users))
}
async fn post_users(
    State(pool): State<ConnectionPool>,
    Json(input): Json<CreateUser>,
) -> Result<Json<User>, (StatusCode, String)> {
    let new_user = CreateUser {
        username: input.username,
        email: input.email,
    };
    let connection = pool.get().await.map_err(|e| internal_error(e))?;
    let add_user_query = connection
        .query(
            "INSERT into users (username, created_at, email) values ($1, $2, $3) RETURNING *;",
            &[
                &new_user.username,
                &time::OffsetDateTime::now_local().map_err(|e| internal_error(e))?,
                &new_user.email,
            ],
        )
        .await
        .map_err(|e| internal_error(e))?;
    let added_user_row = &add_user_query[0];
    Ok(Json(User::new(
        added_user_row.get("user_id"),
        added_user_row.get("username"),
        added_user_row.get("created_at"),
        added_user_row.get("email"),
    )))
}

fn internal_error<E>(err: E) -> (StatusCode, String)
where
    E: std::error::Error,
{
    (StatusCode::INTERNAL_SERVER_ERROR, err.to_string())
}
