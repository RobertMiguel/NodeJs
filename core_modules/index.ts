import express from 'express'
import { getHomePage, getAboutPage } from './modules/express'

const app = express()

app.get('/home', getHomePage)
app.get('/about', getAboutPage)

const port = 8080

app.listen(port, () => { console.log(`Server ir running on port ${port}`) })
