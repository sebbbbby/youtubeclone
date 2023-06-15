import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
    axios
      .get("/api/videos")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching videos", error);
      });
  };

  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
};

export default App;
