const express = require('express')

const app = express()

app.listen('3000')

//middleware
app.use(express.json())

//GET
//app.route('/').get((req, res) => res.send('Hello, '))
//app.route('/sobre').get((req, res) => res.send('Hello, sobre'))

//POST
//app.route('/').post((req, res) => console.log(req.body))
app.route('/').post((req, res) => res.send(req.body))