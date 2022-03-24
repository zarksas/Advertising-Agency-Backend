const Cart = require('../models/Cart.model');

module.exports.cartsController = {
  getAllCarts: async (req, res) => {
    try {
      const carts = await Cart.find();
      res.json(carts);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  getIdCart: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.user.id });
      res.json(cart);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  addCartRents: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.params.userId });
      await cart.update({
        product: {
          $push: { rents: req.body.rents },
        },
      });
      res.json(cart);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  addCartSales: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.params.userId });
      await cart.update({
        product: {
          $push: { sales: req.body.sales },
        },
      });
      res.json(cart);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
};
