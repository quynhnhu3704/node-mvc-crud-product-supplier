// config/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const fs = require('fs');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Part App API',
      version: '1.0.0',
      description: 'API documentation for Part App (Products, Users, Suppliers)'
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Local server' }
    ]
  },
  apis: [path.join(__dirname, '../routes/*.js')], // tất cả router có @swagger
};

const swaggerSpec = swaggerJsdoc(options);

// Xuất file swagger.json
fs.writeFileSync(path.join(__dirname, '../swagger.json'), JSON.stringify(swaggerSpec, null, 2));

console.log('swagger.json created successfully!');
