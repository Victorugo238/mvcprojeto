const indexController = {
  home: (req, res) => {
    return res.render("index", {title: "Home"});
  },
};
module.exports = indexController;
