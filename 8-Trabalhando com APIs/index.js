const express = require('express')

const app = express()

app.listen('3000')

//Middleware
app.use(express.json())

//Variable
let author = "Ciro"

//GET
//app.route('/').get((req, res) => res.send('Hello, '))
//app.route('/sobre').get((req, res) => res.send('Hello, sobre'))

//POST
//app.route('/').post((req, res) => console.log(req.body))
//app.route('/').post((req, res) => res.send(req.body))

//PUT
app.route('/').get((req, res) => res.send(author))

app.route('/').put((req, res) => {
  author = req.body.author
  res.send(author)
})