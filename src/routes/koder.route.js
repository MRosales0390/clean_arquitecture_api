const express = require("express")
const app = require("../server")
const { getAll, getById } = require("../usecases/koder.usecase")

const router = express.Router()

router.get("/", async (request, response) => {
  try {
    const koders = await getAll() // useCase

    response.json({
      sucess: true,
      data: {
        koders,
      },
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message,
    })
  }
})

module.exports = router
