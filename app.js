const express = require("express");
const app = express();
const port = 3000;
// Importa pacote method-override
// Serve para alterar método da requisição
// Ex: Post vira put, get vira delete, get vira put...
const methodOverride = require("method-override");
const indexRoute = require("./src/routes/indexRoute");
const userRoute = require("./src/routes/userRoute");
const categoryRouter = require("./src/routes/categoryRouter");

// Configura pasta estática para acesso externo
app.use(express.static(__dirname + "/public"));
// Configura o template engine, troca do padrão (jade) para ejs
app.set("view engine", "ejs");
// Configura o caminho para os views, troca o padrão que é no raiz para o src
app.set("views", __dirname + "/src/views");

// Configura o methodOverride no express
app.use(methodOverride("_method"));
// Converter corpo da requisição (body) em objeto literal
app.use(express.json());
// Converte requisição para formato que o json aceita
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/user", userRoute);
app.use("/category", categoryRouter);

app.listen(port, () => {
  console.log("Estamos rodando na porta" + port);
});
