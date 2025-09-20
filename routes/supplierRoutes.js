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
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Supplier'
 *   post:
 *     summary: Create a new supplier
 *     tags: [Suppliers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Supplier'
 *     responses:
 *       201:
 *         description: Supplier created
 */

/**
 * @swagger
 * /suppliers/{id}:
 *   put:
 *     summary: Update supplier by id
 *     tags: [Suppliers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Supplier'
 *     responses:
 *       200:
 *         description: Supplier updated
 *   delete:
 *     summary: Delete supplier by id
 *     tags: [Suppliers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Supplier deleted
 */

// Routes
router.get('/', supplierController.index);
router.get('/new', supplierController.newForm);
router.post('/', supplierController.create);
router.get('/:id/edit', supplierController.editForm);
router.put('/:id', supplierController.update);
router.delete('/:id', supplierController.delete);

module.exports = router;
