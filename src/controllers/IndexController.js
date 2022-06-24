const indexController = {
  
  home: (req, res) => {
    return res.render("index", { title: "Home" });
  },
  products: (req, res) => {
    return res.render("products", { title: "Produtos" });
  },
  login: (req, res) => {
    return res.render("login", { title: "Login" });
  },
 
  users: (req, res) => {
    const users = [
      {
        nome: "Henrique",
        sobrenome: "Serra",
        idade: 22
      },
      {
        nome: "Roberto Carlos",
        sobrenome: "Silva",
        idade: 89
      },
      {
        nome: "Augusto",
        sobrenome: "Souza",
        idade: 33
      },
  
    ]
  
    return res.render("users", { title: "Usuario", Usuario: users });
  },
};

module.exports = indexController;
