CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL,
    email VARCHAR(255) NOT NULL,
    UNIQUE(username, user_id)
);

insert into users (username, created_at, email) values ('foo.b', current_timestamp, 'foo.bar@icloud.com');