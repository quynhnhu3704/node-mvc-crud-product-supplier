const Supplier = require('../models/Supplier');


module.exports.index = async (req, res) => {
const suppliers = await Supplier.find().sort({ createdAt: -1 });
res.render('suppliers/index', { suppliers });
};


module.exports.newForm = (req, res) => {
res.render('suppliers/new');
};


module.exports.create = async (req, res) => {
const { name, address, phone } = req.body;
await Supplier.create({ name, address, phone });
res.redirect('/suppliers');
};


module.exports.editForm = async (req, res) => {
const supplier = await Supplier.findById(req.params.id);
if (!supplier) return res.redirect('/suppliers');
res.render('suppliers/edit', { supplier });
};


module.exports.update = async (req, res) => {
const { name, address, phone } = req.body;
await Supplier.findByIdAndUpdate(req.params.id, { name, address, phone });
res.redirect('/suppliers');
};


module.exports.delete = async (req, res) => {
await Supplier.findByIdAndDelete(req.params.id);
res.redirect('/suppliers');
};