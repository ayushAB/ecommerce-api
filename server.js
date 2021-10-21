require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 4000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
//CORS
app.use(cors())
// parse requests of content-type - application/json
app.use(bodyParser.json())
// Configuring the database
const DB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/ecom'
const dbConnect = require('./configuration/database_configuration');
dbConnect(DB_URL)

const userRoutes = require('./routes/userroute');
const ProductRoutes = require('./routes/products');
const CartRoutes = require('./routes/cartroute');
// using as middleware
app.use('/api/users', userRoutes);
app.use('/api/products',ProductRoutes)
app.use('/api/cart',CartRoutes)
// listen for requests
app.listen(port, () => {
   console.log(`Node server is listening on port ${port}`);
});