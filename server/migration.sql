-- DROP TABLE IF EXISTS youtubevideos;
   DROP TABLE IF EXISTS comments;

-- CREATE TABLE youtubevideos (
--     id SERIAL PRIMARY KEY,
--     video_id VARCHAR(255) UNIQUE,
--     title TEXT,
--     description TEXT,
--     thumbnail_url VARCHAR(255),
--     url VARCHAR(255),
--     published_at TIMESTAMPTZ,
--     channel_id VARCHAR(255),
--     channel_title VARCHAR(255),
--     view_count BIGINT,
--     like_count BIGINT,
--     dislike_count BIGINT
-- );

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    video_id VARCHAR(255),
    comment TEXT[],
    timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (video_id) REFERENCES youtubevideos(video_id)
);

INSERT INTO comments (video_id, comment) VALUES ('-7fuHEEmEjs', '{"I love this song"}');