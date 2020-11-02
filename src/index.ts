import 'reflect-metadata'
import express, { Express } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { createConnection } from 'typeorm'
import routes from './routes'

const PORT = 5000
const app: Express = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(routes)

createConnection()
  .then(async () => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch(err => console.error(err))
