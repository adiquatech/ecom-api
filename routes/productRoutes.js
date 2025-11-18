import express from 'express';
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';
import { validateProduct } from '../middleware/validate.js';

const router = express.Router();

/**
 * @swagger
 * /products:
 *   get: { summary: "Get all products", tags: ["Products"] }
 *   post: { summary: "Create product", tags: ["Products"], requestBody: { required: true, content: { "application/json": { schema: { type: "object", properties: { name: {type:"string"}, description:{type:"string"}, price:{type:"number"}, stock:{type:"number"}, category:{type:"string"} }, required: ["name","description","price","stock","category"] } } } } }
 *
 * /products/{id}:
 *   get: { summary: "Get product by ID", tags: ["Products"], parameters: [{in:"path",name:"id",required:true,schema:{type:"string"}}] }
 *   put: { summary: "Update product", tags: ["Products"], parameters: [{in:"path",name:"id",required:true,schema:{type:"string"}}], requestBody: { required: true, content: { "application/json": { schema: { type: "object", properties: { name: {type:"string"}, description:{type:"string"}, price:{type:"number"}, stock:{type:"number"}, category:{type:"string"} } } } } } }
 *   delete: { summary: "Delete product", tags: ["Products"], parameters: [{in:"path",name:"id",required:true,schema:{type:"string"}}] }
 */

router.route('/')
  .get(getProducts)
  .post(validateProduct, createProduct);

router.route('/:id')
  .get(getProduct)
  .put(validateProduct, updateProduct)
  .delete(deleteProduct);

export default router;