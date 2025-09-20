const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         price:
 *           type: number
 *         quantity:
 *           type: number
 *         supplier:
 *           type: string
 *           description: Supplier id
 *       example:
 *         id: "12345"
 *         name: "Sản phẩm 1"
 *         price: 100000
 *         quantity: 10
 *         supplier: "60d..."
 */

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Product management
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get list of products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 */
router.get('/', productController.index);

router.get('/new', productController.newForm);
router.post('/', productController.create);
router.get('/:id/edit', productController.editForm);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

module.exports = router;
