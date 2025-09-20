// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


const app = express();


// connect to MongoDB
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/product_supplier_db';
mongoose.connect(mongoUri)
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));


// Swagger setup
const swaggerOptions = {
definition: {
openapi: '3.0.0',
info: {
title: 'Product & Supplier API',
version: '1.0.0',
description: 'CRUD APIs cho Supplier và Product'
},
servers: [
{ url: `http://localhost:${process.env.PORT || 3000}` }
]
},
apis: ['./routes/*.js']
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Routes
const supplierRoutes = require('./routes/supplierRoutes');
const productRoutes = require('./routes/productRoutes');


app.use('/suppliers', supplierRoutes);
app.use('/products', productRoutes);


app.get('/', (req, res) => {
res.render('index');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`🚀 Server running on port ${PORT}`);
console.log(`🔗 Swagger docs: http://localhost:${PORT}/api-docs`);
});