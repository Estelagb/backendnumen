const express= require('express');
const {check} = require ('express-validator');

const router = express.Router();
const productsController = require('../controllers/productsController');
const validarProducto = require('../middlewares/validarProducto');




//read
router.get('/', productsController.getProducts);

router.get('/buscar', productsController.getProductsByName );

router.get('/:id', productsController.getProductsById);

//crear
router.post('/agregar', validarProducto,
[
    check('productname').not().isEmpty().withMessage('Completar campo obligatorio'),
    check('description').not().isEmpty().withMessage('Completar campo obligatorio'),
    check('price').not().isEmpty().isNumeric().withMessage('Completar campo obligatorio'),
    check('stock').not().isEmpty().isNumeric().withMessage('Completar Cantidad en stock'),
    
], 
productsController.postProduct);

//update
router.put('/actualizar/:id', 
[
    check('productname').not().isEmpty().withMessage('Completar campo obligatorio'),
    check('description').not().isEmpty().isEmpty().withMessage('Completar campo obligatorio'),
    check('price').not().isEmpty().isNumeric().withMessage('Completar campo obligatorio'),
    check('stock').not().isEmpty().isNumeric().withMessage('Completar Cantidad en stock')
], 
productsController.updateProduct);

//delete
router.delete('/borrar/:id', productsController.deleteProduct);


module.exports = router;