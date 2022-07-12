const express = require("express")
const app = require("../server")
const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require("../usecases/koder.usecase")

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

router.get("/:id", async (request, response) => {
  const { id } = request.params

  try {
    const koder = await getById(id)

    response.json({
      success: true,
      data: {
        koder,
      },
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      message: error.message,
    })
  }
})

router.post("/", async (request, response) => {
  //request.body
  try {
    const koder = await create(request.body)

    response.status(201)
    response.json({
      success: true,
      data: {
        koder,
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

router.patch("/:id", async (request, response) => {
  try {
    const { id } = request.params
    const koder = await update(id, request.body)

    response.json({
      success: true,
      data: {
        koder,
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

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params
    const koder = await remove(id)

    response.json({
      success: true,
      data: {
        koder,
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
