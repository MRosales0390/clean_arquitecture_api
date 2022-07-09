const express = require("express")
const app = express()

// Middleware
app.use(express.json())
/**
 * Aquí van todos los middlewares
 */

app.get("/", (request, response) => {
  response.json({
    message: "Endpoint de Home, bienvenido a nuestra API de clean arquitecture",
  })
})

// Exportar
// module.exports -> Nada más puedes exportar una cosa por archivo
// pero esta cosa puede ser -> objeto, arreglo, función, app
module.exports = app
