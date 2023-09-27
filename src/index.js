const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const Specie = require('./models/specie')

const PORT = process.env.PORT
const DATABASE_URI = process.env.DATABASE_URI

const app = express()

app.get('/api/items', async (req, res) => {
  try {
    const query = req.query.q
    const regex = new RegExp(query, 'i')
    const result = await Specie.find({ name: regex })
    res.json(result)
  } catch (error) {
    console.log(error)
  }
})

mongoose.connect(DATABASE_URI).then(() => {
  app.listen(PORT)
  console.log(`App started at port ${PORT}`)
})
