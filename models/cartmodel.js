const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
        "productname": {type:String},
        "price": {type:String},
        "userId":{type:String},
        "productId":{type:String}
});

module.exports = mongoose.model('Cart', CartSchema);