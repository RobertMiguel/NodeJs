// import express from 'express'
import dotenv from 'dotenv'
import * as connect from './src/database/connect'
// import { getHomePage, getAboutPage, getUsers } from './modules/express'

// const app = express()

dotenv.config()

connect

// app.get('/home', getHomePage)
// app.get('/about', getAboutPage)
// app.get('/users', getUsers)

// const port = 8080

// app.listen(port, () => { console.log(`Server ir running on port ${port}`) })
