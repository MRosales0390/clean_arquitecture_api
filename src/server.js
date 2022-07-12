const express = require("express")
const app = express()
const routerKoders = require("./routes/koder.route")
const routerMentors = require("./routes/mentor.route")

// Middleware
app.use(express.json())
/**
 * Aquí van todos los middlewares
 */
app.use((request, response, next) => {
  console.log("Pasamos por aqui ", request.method)
  next()
})

// Middleware para ruta
app.use("/koders", routerKoders)
app.use("/mentors", routerMentors)

app.get("/", (request, response) => {
  response.json({
    message: "Endpoint de Home, bienvenido a nuestra API de clean arquitecture",
  })
})

// Exportar
// module.exports -> Nada más puedes exportar una cosa por archivo
// pero esta cosa puede ser -> objeto, arreglo, función, app
module.exports = app
