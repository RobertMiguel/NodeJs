import * as http from 'http'
import * as url from 'url'

const port = 8080

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  const q = url.parse(req.url, true).query
})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})


