const express = require('express');
const {
  checkout,
  verifyPayment,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

router.use(protect); // every order route needs a logged-in user

router.post('/checkout', checkout);
router.post('/verify', verifyPayment);
router.get('/my', getMyOrders);

// admin-only
router.get('/', admin, getAllOrders);
router.put('/:id/status', admin, updateOrderStatus);

module.exports = router;