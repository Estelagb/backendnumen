const { validationResult } = require('express-validator');
const Producto = require('../models/Producto');


const getProducts = async (req, res)=>{
   const products= await Producto.find();
   res.status(200).json({products, msg:'ok'});
};

const getProductsById = async (req, res)=>{
    const product = await Producto.findById(req.params.id)

    if (product !== undefined && product!== null){
        res.status(200).json({product: product, msg:'ok'});
    }else {
        res.status(404).json({product: null, msg:'Producto no encontrado'})
    }
};

const getProductsByName = async(req, res)=>{
    
    const products= await Producto.findOne({productname: req.query.productsname});
    if (products !== undefined && products!== null){
        res.status(200).json({products, msg:'ok'});
    }else {
        res.status(404).json({products: null, msg:'Producto no encontrado'});
    }
};

    const postProduct = async (req, res) => {
    try{
      const validationError = validationResult(req);
      
      if(validationError.isEmpty()){
        const product = new Producto (req.body);
        await product.save();

        res.status(201).json({product: product.productname, msg:'El producto fue agregado exitosamente'});
      } else{
        res.status(400).json({msg:'Error al agregar producto -' + error.message,})
      } 
    
    }
    catch (error){
    res.status(500).json({product:null, msg:'Error en servidor' + error.message});

    }
};

    const updateProduct = async (req, res)=>{
        
        try{
            await Producto.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({msg: 'Producto actualizado'});
        }catch(error){
            res.status(500).json({msg:'Error en el servidor al actualizar- ' + error.message});
        }
    };

    const deleteProduct = async (req, res) => {
        try{
            await Producto.findByIdAndDelete(req.params.id);
            res.status(200).json({msg:'Producto eliminado'})

        }catch(error){
            res.status(500).json({msg:'Error al eliminar-' + error.message});
        }
    };

module.exports= {getProducts, getProductsById, getProductsByName, postProduct, updateProduct, deleteProduct}