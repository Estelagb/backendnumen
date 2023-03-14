const express= require('express');
const app = express();
const port = 8080;

const productsRouter = require('./routes/products');

const dbConnect = require('./database/dbConnect');

app.use(express.json());
app.use('/products', productsRouter);


app.listen(port, () => {
  console.log(`Ejemplo http://localhost:${port}`)
});

dbConnect();