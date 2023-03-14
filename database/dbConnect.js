mongoose= require('mongoose');
require('dotenv').config();

const dbConnect = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.log('conectado');

    } catch (error){
        throw new Error ('No se pudo conectar');
    }
};

module.exports = dbConnect;