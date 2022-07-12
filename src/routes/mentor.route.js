const express = require("express")
const app = require("../server")
const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require("../usecases/mentor.usecase")

const router = express.Router()

router.get("/", async (request, response) => {
  try {
    const mentors = await getAll()

    response.json({
      success: true,
      data: {
        mentors,
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
  try {
    const { id } = request.params
    const mentor = await getById(id)

    response.json({
      success: true,
      data: {
        mentor,
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

router.post("/", async (request, response) => {
  try {
    const mentor = await create(request.body)

    response.json({
      success: true,
      data: {
        mentor,
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
    const mentor = await update(id, request.body)

    response.json({
      success: true,
      data: {
        mentor,
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
    const mentor = await remove(id)

    response.json({
      success: true,
      data: {
        mentor,
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
