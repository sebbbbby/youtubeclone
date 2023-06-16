DROP TABLE IF EXISTS youtubevideos;

CREATE TABLE youtubevideos (
    id SERIAL PRIMARY KEY,
    video_id VARCHAR(255) UNIQUE,
    title TEXT,
    description TEXT,
    thumbnail_url VARCHAR(255),
    url VARCHAR(255),
    published_at TIMESTAMPTZ,
    channel_id VARCHAR(255),
    channel_title VARCHAR(255),
    view_count BIGINT,
    like_count BIGINT,
    dislike_count BIGINT
);
