import express from "express";
import postgres from "postgres";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT;
const sql = postgres(process.env.DATABASE_URL);
const app = express();
const api_key = process.env.API_KEY;
const youtubeVideoPopular = process.env.YOUTUBEVIDEOSPOPULAR;

app.use(express.json());

app.get("/api/videos", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          maxResults: 10,
          key: process.env.API_KEY,
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while fetching videos");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
