const Koder = require("../models/koder.model")

// Usecase
const getAll = async () => {
  const koders = await Koder.find({})

  return koders
}

const getById = async (id) => {
  const koder = await Koder.findById((koder) => koder.id === parseInt(id))

  return koder
}

module.exports = { getAll, getById }
