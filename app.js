const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("./src/routes/userRoute");
const indexRoute = require("./src/routes/indexRoute");

// Configura pasta estática para acesso externo
app.use(express.static(__dirname + "/public"));
// Configura o template engine
app.set("view engine", "ejs");
// Configura o caminho para os views
app.set("views", __dirname + "/src/views");
app.use(express.json());

app.use(indexRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log("Estamos rodando na porta: " + port);
});
