const Mentor = require("../models/mentor.model")
const createError = require("http-errors")

const getAll = () => {
  const mentors = Mentor.find({})

  return mentors
}

const getById = async (id) => {
  const mentor = await Mentor.findById(id)

  if (!mentor) {
    const error = createError(401, "No se encontró el Mentor")
    throw error
  }

  return mentor
}

const create = (mentorData) => {
  const mentor = Mentor.create(mentorData)

  return mentor
}

const update = (id, mentorData) => {
  const mentor = Mentor.findByIdAndUpdate(id, mentorData)

  return mentor
}

const remove = (id) => {
  const mentor = Mentor.findByIdAndDelete(id)

  return mentor
}

module.exports = { getAll, getById, create, update, remove }
