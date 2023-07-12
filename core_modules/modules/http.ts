import * as http from 'http'

const port = 8080

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(`<h1>Home Page</h1>`)
  }
  if (req.url === '/users') {
    const users = [
      {
        name: 'Robert',
        age: 17,
        email: 'robert@gmail.com'
      },
      {
        name: 'Miguel',
        age: 17,
        email: 'miguel@gmail.com'
      }
    ]

    res.writeHead(200, { 'Content-Type': 'applicatio/json' })
    res.end(JSON.stringify(users))

  }

})

console.log(port, () => console.log(`Server is running on port ${port}`))
