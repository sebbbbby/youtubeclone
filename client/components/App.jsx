import React, { useEffect, useState } from "react";

const YouTubeWebsite = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Insert our Youtube API here:
    fetch("")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <header>
        <h1>Welcome to Office Avengers' YouTube Website</h1>
      </header>

      <div id="videos">
        {videos.map((video) => (
          <div className="video" key={video.id}>
            <img
              className="thumbnail"
              src={video.thumbnail}
              alt={video.title}
            />
            <div className="title">{video.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeWebsite;
