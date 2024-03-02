const express = require("express")
const app = express()

const HTTP_PORT = 8080
const path = require("path")

app.use(express.static("public"))
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render('index')
})


app.use((req, res, next) => {
    res.status(404).send("404 - We're unable to find what you're looking for.");
})

app.listen(HTTP_PORT, () => {
    console.log(`server listening at port ${HTTP_PORT}`)
})