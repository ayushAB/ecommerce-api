const Cart = require('../models/cartmodel');

exports.findAllproducts = (req, res) => {
  Cart.find().then(Cart => {
    res.send(Cart);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Something went wrong while getting list of users."
    });
  });
};


exports.findAll = (req, res) => {
  Cart.find({
      userId: req.params.id
    })
    .then(Cart => {
      res.send(Cart);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Something went wrong while getting list of users."
      });
    });
};




exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Please fill all required field"
    });
  }


  Cart.collection.insertMany(req.body).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Something went wrong."
    });
  });


};