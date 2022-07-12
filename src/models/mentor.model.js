const mongoose = require("mongoose")

const mentorSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  skills: {
    type: [String],
    minLength: 1,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
  mentoredGenerations: {
    type: [
      {
        gen: {
          type: String,
        },
        module: { type: [String] },
      },
    ],
  },
})

const Mentor = mongoose.model("mentors", mentorSchema)

module.exports = Mentor
