const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    productname:{
        type: String,
        required: true,
        unique: true,
    },

    description: {
        type: String,
        required: true,
        
    },
    price:{
        type: Number,
        required: true,
       
    },
    
    stock:{
        type: Number,
        required: true,
    },
    
});

const Producto = mongoose.model('Producto', productSchema);
module.exports = Producto;
