const Producto = require('../models/Producto');


const validarProducto= async(req, res, next) =>{
    const product = await Producto.findOne ({productname: req.body.productname})
    
    if(product){
        res.status(400).json({msg:'Producto existente'})
    } else {
        next();
    }
};

module.exports = validarProducto;