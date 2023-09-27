const mongoose = require('mongoose')

const { Schema } = mongoose

const specieSchema = new Schema({
  index: Number,
  name: String,
  scientificName: String,
  commonNames: String,
  impact: String,
  manage: String,
  riskLevel: Number,
  urlImage: String,
})

const Specie = mongoose.model('Specie', specieSchema)

module.exports = Specie
