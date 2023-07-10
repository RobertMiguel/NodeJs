const express = require('express')
const app = express()

const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

app.use(express.static('public'))

// const checkAuth = (req, res, next) => {
//
//   req.authStatus = false
//
//   if (req.authStatus) {
//     console.log('Está logado, pode continar')
//     next()
//   } else {
//     console.log('Não está logado, faça o login')
//     next()
//   }
//
// }

// app.use(checkAuth)

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userForm.html`)
})

app.post('/users/save', (req, res) => {

  const nameUser = req.body.name
  const ageUser = req.body.age

  console.log(`Name user : ${nameUser} and Age : ${ageUser}`)

  res.sendFile(`${basePath}/userForm.html`)

})

app.get('/user/:id', (req, res) => {

  const id = req.params.id

  console.log(`User ID: ${id}`)

  res.sendFile(`${basePath}/users.html`)

})

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.post('/users/save', (req, res) => {

})

app.use((req, res, next) => {
  res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

