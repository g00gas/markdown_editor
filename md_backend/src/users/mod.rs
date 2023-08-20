use serde::{Deserialize, Serialize};
use time::OffsetDateTime;

#[derive(Serialize, Deserialize, Debug)]
pub struct User {
    pub id: i32,
    pub username: String,
    #[serde(with = "time::serde::iso8601")]
    pub creation_date: OffsetDateTime,
    pub email: String,
}

impl User {
    pub fn new(id: i32, username: String, creation_date: OffsetDateTime, email: String) -> Self {
        User {
            id,
            username,
            creation_date,
            email,
        }
    }
}
#[derive(Serialize, Deserialize, Debug)]
pub struct CreateUser {
    pub username: String,
    pub email: String,
}
