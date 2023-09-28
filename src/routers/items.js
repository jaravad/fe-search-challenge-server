const express = require('express')
const router = express.Router()

const Specie = require('../models/specie')

router.get('/items', async (req, res) => {
  try {
    const query = req.query.q
    if (query === null) {
      const data = await Specie.find()
      return res.json(data)
    }
    const regex = new RegExp(query, 'i')
    const result = await Specie.find({ name: regex })
    res.json(result)
  } catch (error) {
    console.log(error)
  }
})

router.get('/items/:id', async (req, res) => {
  try {
    const { id } = req.params
    const item = await Specie.findOne({ index: id })
    res.json(item)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
