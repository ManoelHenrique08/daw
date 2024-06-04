const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
origin:
"",
};

app.use(cors(corsOptions));
//parser de requisições com content type - application/json
app.use(express.json());
//parser de requisições com content type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
res.send("Desenvolvimento de Aplicações WEB II");
});

app.get("/aula1", function (req, res) {
res.send("Primeira aula - DAW II");
});

app.listen(8000, function (req, res) {
console.log("App rodando na porta 8000" );
});

