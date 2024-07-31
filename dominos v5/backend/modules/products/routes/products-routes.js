import express from 'express';
import { getProduct, getProducts } from '../controllers/product-controller.js';
import { addProduct } from '../controllers/product-controller.js';
const router = express.Router();

router.get('/get-products', getProducts);
router.get('/get-product:id', getProduct);
router.post('/add-product', addProduct);
// router.patch('/order-hisotry:id', orderHistoryController.update);
// router.delete('/order-hisotry:id', orderHistoryController.destroy);

export default router;