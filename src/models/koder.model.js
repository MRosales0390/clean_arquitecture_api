const mongoose = require("mongoose")

// Schema
const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
  },
  edad: {
    type: Number,
    min: 18,
    max: 150,
  },
  gen: {
    type: String,
    required: true,
  },
  modulo: {
    type: String,
  },
  hobbies: {
    type: [String],
  },
  sexo: {
    type: String,
    enum: ["f", "m"],
  },
})

// Modelos
const Koder = mongoose.model("koders", koderSchema)

module.exports = Koder
