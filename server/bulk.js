import postgres from 'postgres'
import fs from 'fs'
import { faker, ur } from '@faker-js/faker'
const sql = postgres('postgres://localhost:5432/tasktime')
const writableStream = fs.createWriteStream('data.csv')

await sql`DELETE FROM youtubevideos`

for (let i = 0; i < 10_000; i++) {
    const descriptionFaker = faker.commerce.productDescription()
    const descriptionWithoutCommas = descriptionFaker.replace(/,/g, '')
    const video_id = i
    const title = "I'M IN THE FNAF MOVIE! - FNAF Movie FINAL Trailer (REACTION)"
    const description =
        descriptionWithoutCommas +
        ' ' +
        descriptionWithoutCommas +
        ' ' +
        descriptionWithoutCommas +
        ' ' +
        descriptionWithoutCommas
    const thumbnail_url = 'https://i.ytimg.com/vi/UhZmJTFyOLA/mqdefault.jpg'
    const url = 'https://www.youtube.com/watch?v=UhZmJTFyOLA'
    const published_at = '2023-06-27T16:42:34.000Z'
    const channel_id = 'UCx8vbgWs666cAS7wsKos5sA'
    const channel_title = '8-BitRyan'
    const view_count = '606066'
    const like_count = '12345'
    const dislike_count = '123456'

    writableStream.write(
        `${video_id}, ${title}, ${description}, ${thumbnail_url}, ${url}, ${published_at}, ${channel_id}, ${channel_title}, ${view_count}, ${like_count}, ${dislike_count}\n`
    )
}
writableStream.close()
sql.end()
