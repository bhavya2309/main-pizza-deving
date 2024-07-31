import express from 'express';
import { addOrderHistory, getOrderHistory, getOrdersHistory } from '../controllers/order_hist-controller.js';
const router = express.Router();

router.get('/get-order-history', getOrderHistory);
router.get('/get-order-history:id', getOrdersHistory);
router.post('/add-order-history', addOrderHistory);
// router.patch('/order-hisotry:id', orderHistoryController.update);
// router.delete('/order-hisotry:id', orderHistoryController.destroy);

export default router;
