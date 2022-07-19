const express = require('express');

//Instantiating 'express' and storing it in the 'app' variable.
//Instanciando o 'express' e guardando na variável 'app'.
const app = express();

//Comunicando o 'express' do uso do view engine 'EJS' para visualizar o HTML.
//Communicating the 'express' of using the 'EJS' view engine to view the HTML.
app.set("view engine", "ejs");

//Criando a rota
//Creating the route
app.get("/", function (req, res) {
  const items = [
    {
      title: 'D',
      message: "esenvolver aplicações/Serviços de forma fácil"
    },
    {
      title: 'E',
      message: "JS usa Javascript para renderizar HTML"
    },
    {
      title: 'M',
      message: "uito fácil de usar"
    },
    {
      title: 'A',
      message: "diciona praticidade"
    },
    {
      title: 'I',
      message: "nstall ejs"
    },
    {
      title: 'S',
      message: "intaxe simples"
    }
  ];
  const subtitle = "Uma linguagem de modelagem para a criação de páginas HTML utilizando JS"

  res.render("pages/index",{
    qualitys: items,
    subtitle: subtitle,
  });
})

app.get("/sobre", function (req, res) {
  res.render("pages/about");
})

//carregamento do 'listen' do 'express' na porta 8080.
//load 'listen' from 'express' on port 8080.
app.listen(8080);
console.log('Servidor Funcionando')