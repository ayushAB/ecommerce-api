const Products = require('../models/productmodel');
// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
  Products.find()
    .then(Products => {
      res.send(Products);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Something went wrong while getting list of users."
      });
    });
};