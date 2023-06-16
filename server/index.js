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

// seb_branch

//server side get request for search results. dont think we need to save anything with this request
app.get("/api/search/:search", async (req, res) => {
  const searchWord = req.params.search;

  if (!searchWord) {
    return res.status(400).send("Missing search word!");
  }

  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        //we can adjust the params based on the google docs to get more results, order it differently and have our type return different stuff -sp
        params: {
          part: "snippet",
          maxResults: 1,
          order: "relevance",
          q: `${searchWord}`,
          type: "video",
          key: `${api_key}`,
        },
      }
    );

    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error occurred while searching YouTube videos:", error);
    res.status(500).send("An error occurred");
  }
});

// app.get("/api/videos", async (req, res) => {
//   try {
//     const response = await axios.get(youtubeVideoPopular, {
//       params: {
//         part: "snippet,contentDetails,statistics",
//         chart: "mostPopular",
//         maxResults: 1,
//         key: process.env.API_KEY,
//       },
//     });

//     const videoData = response.data.items.map((item) => {
//       return {
//         video_id: item.id || null,
//         title: item.snippet.title || null,
//         description: item.snippet.description || null,
//         url: `https://www.youtube.com/watch?v=${item.id}` || null,
//         published_at: item.snippet.publishedAt || null,
//         channel_id: item.snippet.channelId || null,
//         channel_title: item.snippet.channelTitle || null,
//         view_count: video.statistics.viewCount || null,
//         like_count: video.statistics.likeCount || null,
//         dislike_count: video.statistics.dislikeCount || null,
//       };
//     });
//     for (const video of videoData) {
//       await sql`INSERT INTO youtubevideos (
//         video_id,
//         title,
//         description,
//         thumbnail_url,
//         url,
//         published_at,
//         channel_id,
//         channel_title.
//         view_count,
//         like_count,
//         dislike_count
//       ) VALUES (
//         ${video.video_id},
//         ${video.title},
//         ${video.description},
//         ${video.thumbnail_url},
//         ${video.url},
//         ${video.published_at},
//         ${video.channel_id},
//         ${video.channel_title}
//         ${video.view_count},
//         ${video.like_count},
//         ${video.dislike_count}
//       ) ON CONFLICT (video_id) DO NOTHING`;
//     }
//     res.send(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error occurred while fetching videos");
//   }
// });
// master;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
