const express = require('express')
const router = express.Router()

const Specie = require('../models/specie')

router.get('/items', async (req, res) => {
  try {
    const query = req.query.q
    const { skip, limit } = req.query
    let filter
    if (!query && query !== '') {
      filter = {}
    } else {
      const regex = new RegExp(query, 'i')
      filter = { name: regex }
    }
    const items = await Specie.find(filter).skip(skip).limit(limit)
    const itemsCount = await Specie.countDocuments(filter)
    res.json({ items, itemsCount })
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
