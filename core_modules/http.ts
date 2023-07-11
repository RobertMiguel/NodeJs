import * as http from 'http'
import { URL } from 'url'

const port = 8080

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  const reqUrl = new URL(`http://${req.headers.host}${req.url}`);
  const queryParams = reqUrl.searchParams
  const name = queryParams.get('name')
  res.end(`Hello, ${name || 'World'} !`)
})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})


