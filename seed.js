// seed.js
const mongoose = require('mongoose');
require('dotenv').config();
const Supplier = require('./models/Supplier');
const Product = require('./models/Product');

const suppliers = [
  { name: 'Công ty A', address: 'Hà Nội', phone: '0901111111' },
  { name: 'Công ty B', address: 'HCM', phone: '0902222222' },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await Supplier.deleteMany({});
    await Product.deleteMany({});

    const createdSuppliers = await Supplier.insertMany(suppliers);

    await Product.insertMany([
      {
        name: 'Sản phẩm 1',
        price: 100,
        quantity: 50,
        supplier: createdSuppliers[0]._id,
      },
      {
        name: 'Sản phẩm 2',
        price: 200,
        quantity: 30,
        supplier: createdSuppliers[1]._id,
      },
    ]);

    console.log('Seed data inserted successfully!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
