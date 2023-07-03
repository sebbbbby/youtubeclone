-- DROP TABLE IF EXISTS youtubevideos;
-- --    DROP TABLE IF EXISTS comments;

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

-- CREATE TABLE comments (
--     id SERIAL PRIMARY KEY,
--     video_id VARCHAR(255),
--     comment TEXT,
--     timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (video_id) REFERENCES youtubevideos(video_id)
-- );

-- INSERT INTO comments (video_id, comment) VALUES ('-7fuHEEmEjs', '{"I love this song"}');
-- COPY youtubevideos (video_id, title, description, thumbnail_url, url, 
-- published_at, channel_id, channel_title, view_count, like_count, dislike_count) FROM '/Users/sp/Desktop/seb/code/youtubecloneSDC/data.csv' WITH DELIMITER ',' CSV;