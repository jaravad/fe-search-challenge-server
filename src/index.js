const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const PORT = process.env.PORT
const DATABASE_URI = process.env.DATABASE_URI

const app = express()

app.get('/api/items', function (req, res) {
  const query = req.query.q
  res.send(query)
})

mongoose.connect(DATABASE_URI).then(() => {
  app.listen(PORT)
  console.log(`App started at port ${PORT}`)
})
