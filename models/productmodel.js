const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
        "productname": {type:String},
        "price": {type:String},
        "imgurl":{type:String}
});

module.exports = mongoose.model('products', productSchema);