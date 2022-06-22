const userController = {
  index: (req, res) => {
    return res.render("users", { title: "Lista de usuários" });
  },
};

module.exports = userController;
