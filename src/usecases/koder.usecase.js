const Koder = require("../models/koder.model")
const createError = require("http-errors")

// Usecase
const getAll = () => {
  const koders = Koder.find({})

  return koders
}

const getById = async (id) => {
  const koder = await Koder.findById(id)

  if (!koder) {
    /*const error = new Error("No fue encontrado el Koder")
    error["status"] = 404
    throw error
*/
    const error = createError(404, "Koder no encontrado")
    throw error
  }

  return koder
}

const create = (koderData) => {
  const koder = Koder.create(koderData)

  return koder
}

const update = (id, koderData) => {
  const koder = Koder.findByIdAndUpdate(id, koderData)

  return koder
}

const remove = (id) => {
  const koder = Koder.findByIdAndDelete(id)

  return koder
}

module.exports = { getAll, getById, create, update, remove }
