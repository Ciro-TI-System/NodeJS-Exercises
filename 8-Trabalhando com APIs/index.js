const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

//Middleware
app.use(express.json())

app.route('/').get((req, res) => {
  axios.get('https://api.github.com/users/Ciro-TI-System')
    //.then(result => res.send("<img src='" + result.data.avatar_url + "'/>"))
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))//Template String
    .catch(error => console.log(error))
})

//QUERY Params - ('QUERY' can be accepted by GET method).
//app.route('/').get((req, res) => res.send(req.query.nome))
//app.route('/about/user').get((req, res) => res.send(req.query))


//ROUTE Params - ('ROUTE' can be accepted by GET method).
//app.route('/').get((req, res) => res.send("Escreva um nome na rota!"))
//app.route('/:variavel').get((req, res) => res.send(req.params.variavel))
//app.route('/identidade/:nome').get((req, res) => res.send(req.params.nome))

//BODY Params - ('BODY' can be accepted by PUT, POST and PATCH method).
//app.route('/').post((req, res) => {
//  const { nome, cidade } = req.body
//  res.send(`Meu nome é ${nome} e minha cidade é ${cidade}.`)
//})

//Variable
//let author = "Ciro"

//GET
//app.route('/').get((req, res) => res.send('Hello, '))
//app.route('/sobre').get((req, res) => res.send('Hello, sobre'))

//POST
//app.route('/').post((req, res) => console.log(req.body))
//app.route('/').post((req, res) => res.send(req.body))

//PUT
//app.route('/').get((req, res) => res.send(author))

//app.route('/').put((req, res) => {
//  author = req.body.author
//  res.send(author)
//})

//DELETE
//app.route('/:identificador').delete((req, res) => {
//  res.send(req.params.identificador)
//})

