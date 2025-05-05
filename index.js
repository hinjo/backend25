const express = require("express")

const app = express()
const port = process.env.PORT || 3000

app.get("/", (_request, response) => {
  response.send({ hello: "World" })
  console.log("Svarade på Get")
})

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`)
})
