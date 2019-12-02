const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  // Listagem dos produtos por página
  async index(req, res) {
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page: 1, limit: 10 });

    return res.json(products);
  },

  // Mostra um produto pelo id
  async show(req, res) {
    Product.findById(req.params.id);

    return res.json(products);
  },

  // Criação
  async store(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  },

  // Atualização
  async update(req, res) {
    // o parametro new força a requisição retornar o novo valor, se não ela retornaria o valor antes da atualização
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  }
};
