const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
name: { type: String, required: true },
price: { type: Number, default: 0 },
quantity: { type: Number, default: 0 },
supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' }
}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema);