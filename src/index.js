const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const itemsRouter = require('./routers/items')

const PORT = process.env.PORT
const DATABASE_URI = process.env.DATABASE_URI

const app = express()

const whitelist = ['http://localhost:3000']

app.use(
  cors({
    origin: whitelist,
  })
)

app.use('/api', itemsRouter)

mongoose.connect(DATABASE_URI).then(() => {
  app.listen(PORT)
  console.log(`App started at port ${PORT}`)
})
