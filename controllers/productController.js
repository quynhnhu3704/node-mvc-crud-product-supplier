const Product = require('../models/Product');
const Supplier = require('../models/Supplier');


module.exports.index = async (req, res) => {
const products = await Product.find().populate('supplier').sort({ createdAt: -1 });
res.render('products/index', { products });
};


module.exports.newForm = async (req, res) => {
const suppliers = await Supplier.find();
res.render('products/new', { suppliers });
};


module.exports.create = async (req, res) => {
const { name, price, quantity, supplier } = req.body;
await Product.create({ name, price: Number(price || 0), quantity: Number(quantity || 0), supplier });
res.redirect('/products');
};


module.exports.editForm = async (req, res) => {
const product = await Product.findById(req.params.id);
if (!product) return res.redirect('/products');
const suppliers = await Supplier.find();
res.render('products/edit', { product, suppliers });
};


module.exports.update = async (req, res) => {
const { name, price, quantity, supplier } = req.body;
await Product.findByIdAndUpdate(req.params.id, { name, price: Number(price || 0), quantity: Number(quantity || 0), supplier });
res.redirect('/products');
};


module.exports.delete = async (req, res) => {
await Product.findByIdAndDelete(req.params.id);
res.redirect('/products');
};