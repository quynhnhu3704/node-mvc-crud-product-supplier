const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Supplier:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated id of the supplier
 *         name:
 *           type: string
 *         address:
 *           type: string
 *         phone:
 *           type: string
 *       example:
 *         id: "67890"
 *         name: "Công ty ABC"
 *         address: "123 Đường A"
 *         phone: "0123456789"
 */

/**
 * @swagger
 * tags:
 *   - name: Suppliers
 *     description: Supplier management
 */

/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Get list of suppliers
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: List of suppliers
 */
router.get('/', supplierController.index);

router.get('/new', supplierController.newForm);
router.post('/', supplierController.create);
router.get('/:id/edit', supplierController.editForm);
router.put('/:id', supplierController.update);
router.delete('/:id', supplierController.delete);

module.exports = router;
