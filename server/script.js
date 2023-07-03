// import http from 'k6/http'
// import { sleep } from 'k6'

// export default function () {
//     http.get('https://localhost:3001/api/search/usa')
//     sleep(1)
// }

import http from 'k6/http'
import { sleep } from 'k6'
export const options = {
    vus: 100,
    duration: '10s',
}
function returnThis() {
    const response = http.get('http://localhost:3010/api/videos')
}
function searchItem() {
    http.get('http://localhost:3000/api/search/automobile')
}
export default function () {
    // returnThis()
    searchItem()
    sleep(1)
}
