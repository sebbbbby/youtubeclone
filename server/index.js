import express from 'express'
import postgres from 'postgres'
import dotenv from 'dotenv'
import axios from 'axios'
import cors from 'cors'
import { createClient } from 'redis'
dotenv.config({ path: '../.env' })

const PORT = process.env.PORT
const sql = postgres(process.env.DATABASE_URL)
const app = express()
const api_key = process.env.API_KEY
const youtubeVideoPopular = process.env.YOUTUBEVIDEOSPOPULAR
const client = createClient()
await client.connect()
app.use(cors())
app.use(express.json())

app.get('/api/videos', async (req, res) => {
    try {
        const videos = await sql`SELECT * FROM youtubevideos`
        res.json(videos[0])
    } catch (error) {
        console.error(error)
        res.status(500).send('An error occurred')
    }
})

app.get('/api/search/:search', async (req, res) => {
    try {
        const searchVideo = req.params.search
        const searchWords = searchVideo.split(' ')

        let query = 'SELECT * FROM youtubevideos WHERE '

        for (let i = 0; i < searchWords.length; i++) {
            const word = searchWords[i]
            if (
                word.toUpperCase().includes('DROP') ||
                word.toUpperCase().includes('TABLE') ||
                word.toUpperCase().includes('TRUNCATE') ||
                word.toUpperCase().includes('SELECT') ||
                word.toUpperCase().includes('UPDATE') ||
                word.includes('*')
            ) {
                //does not actually send a error status of 420 but it does stop the user from searching the words above
                res.status(420)
                return
            }

            query += `description ILIKE '%${searchWords[i]}%'`
            if (i < searchWords.length - 1) {
                query += ' OR '
            }
        }
        //unsafe allows for a lot of raw SQL data so thats why there are a few 'banned' words that users can not use to mess up our table on accident
        const result = await sql.unsafe(query)

        res.json(result)
    } catch (error) {
        console.error(error)
        res.status(500).send('Error occurred while fetching videos')
    }
})

//this is pulling from out DB NOT from the API
//the description LIKE is searching for the keywork within a videos description
app.get('/api/search/:searchVideo', async (req, res) => {
    try {
        const searchVideo = req.params.searchVideo
        const response =
            await sql`SELECT * FROM youtubevideos WHERE description LIKE %${searchVideo}%`
        res.send(response)
    } catch (error) {
        console.error(error)
        res.status(500).send('Error occurred while fetching videos')
    }
})

app.get('/api/videos/:videoId', async (req, res) => {
    try {
        const videoId = req.params.videoId
        const video =
            await sql`SELECT * FROM youtubevideos WHERE video_id = ${videoId}`

        if (video.length > 0) {
            res.json(video[0])
        } else {
            res.status(404).send('Video not found')
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('An error occurred')
    }
})

app.get('/api/videos/comments/:videoId', async (req, res) => {
    try {
        const videoId = req.params.videoId
        const comments =
            await sql`SELECT comment FROM comments WHERE video_id = ${videoId}`
        res.json(comments)
    } catch (error) {
        console.error(error)
        res.status(500).send('An error occurred')
    }
})
app.post('/api/videos/comments/:videoId', async (req, res) => {
    const videoId = req.params.videoId
    const comment = req.body.comment

    if (!videoId || !comment) {
        console.error(
            `Invalid data - Video ID: ${videoId}, Comment: ${comment}`
        )
        return res.status(400).send('Invalid video id or comment')
    }
    // console.log(typeof videoId, typeof comment);
    try {
        await sql`INSERT INTO comments (video_id, comment) VALUES (${videoId}, ${comment})`
        const allComments =
            await sql`SELECT comment FROM comments WHERE video_id = ${videoId}`
        res.send(allComments)
    } catch (error) {
        // console.error(`Error while adding comment for video ${videoId}`);
        // console.error(`Comment text: ${comment}`);
        console.error(`Error: ${error}`)
        res.status(500).send('An error occurred')
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
