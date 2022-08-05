// ATIVIDADE
// Reproduzir o que foi feito para o usuário na parte de categorias
// - Configurar rota
// - Configurar controladores
// - Criar views

// category
// categories
const categorias = [
    {
      id: 1,
      nome: "Bebidas",
      descricao: "Tudo aquilo que se pode beber",
      codigo: "AF4E2A",
      imagem: "https://random.imagecdn.app/300/300",
    },
    {
      id: 2,
      nome: "Comida",
      descricao: "Tudo aquilo que se pode comer",
      codigo: "AF4E2B",
      imagem: "https://random.imagecdn.app/300/300",
    },
  ];
  const categoryController = {
    index: (req, res) => {
        return res.render("category", 
        {
            title: "home",
            message: "bem vindo a home",
            categorias,
        })   
    },
    show: (req, res) => {
      const {id} = req.params;
      let categoryResult = categorias.find((cat) => cat.id === parseInt(id));
      if(!categoryResult){
        return res.render( "error", {title: "Ops!!!", message: "Categoria não encontrada!"} );
      }
      return res.render("categoria", {title: "Visualizar Categoria", user: categoryResult});

    },
    create: (req, res) => {
    return res.render("category-create", {title: "Criar categoria", message: "Criar nova categoria"});
    },
    store: (req, res) => {
      const { nome,  descricao, codigo, imagem } = req.body;
      if(!nome || !descricao || !codigo || !imagem){
        return res.render("category-create", 
        {title: "ops!!", 
        error: {message: "Preencha todos os campos!",},});

      }
      var newCategory = {
          id: categorias.length + 1,
          nome,
          descricao,
          codigo,
          imagem:`https://i.pravatar.cc/300?img=${imagem}`,
        };
      categorias.push(newCategory);
      return res.render("success", {title: "sucesso!", message: "Categoria Craida com sucesso"} );


    },
    edit: (req, res) => {
      const {id} = req.params;
      let resultedt = categorias.find((edt) => edt.id === parseInt(id));
      if(!resultedt){
          res.render("error", {title: "Ops!!!", message: "Categoria não encontrada!"})
        }
      return res.render("category-edit", {title: "Editar", message: "Editar Categoria", resultCategoria: resultedt})


    },
    update: (req, res) => {
      const {id} = req.params;
      const {nome, descricao, codigo, imagem} = req.body;
      const resultUpdate = categorias.find((up) => up.id === parseInt(id));
      if(!resultUpdate){
        res.render("error", {title: "Ops!!!", message: "Categoria não encontrada!"})
      }
      const resultAtualizacao = resultUpdate;
      if(nome) resultAtualizacao.nome = nome;
      if(descricao) resultAtualizacao.descricao = descricao;
      if(codigo) resultAtualizacao.codigo = codigo;
      if(imagem) resultAtualizacao.imagem =  `https://i.pravatar.cc/300?img=${imagem}`;

      res.render("success", {title:"Atualizado!", message: "Categoria atualizada com sucesso!"})

    },
    delete: (req, res) => {
    const {id} = req.params;
    const resultdelete = categorias.find((del) => del.id === parseInt(id));
    if(!resultdelete){
      return res.render("error", {title: "Error!", message: "Categoria não encontrada"});
    }
    return res.render("category-delete", { title: "Excluir", message:"Excluir categoria", delcat: resultdelete}
    )


    },
    destroy: (req, res) => {
      const {id} = req.params;
      const delecat = categorias.findIndex((ex) => ex.id  === parseInt(id));
      if(delecat === -1){
        res.render("error", {title:"Error", message:"Error categoria não encontrada"});
      }
      categorias.splice(delecat, 1);
      return res.render("success", {title: "Excluido!!", message:"Categoria Excluida"}); 


    },
  };
  
  module.exports = categoryController;