const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name : String,
    price :Number,
    brand : String,
    category : String,
    description : String
});

module.exports =mongoose.model('products', productSchema);