import mongoose from 'mongoose';
const OrderHistorySchema = mongoose.Schema({
    // userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // items: [ItemSchema], // Array of items in the order
    // payment: PaymentSchema, // Payment details
    totalAmount: { type: Number, required: true }, // Total amount for the order
    orderStatus: { type: String, required: true }, // e.g., 'Processing', 'Shipped', 'Delivered', 'Cancelled'
    orderDate: { type: Date, default: Date.now },
    deliveryDate: { type: Date },
    shippingAddress: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true }
    }
  });
  export const OrderHistoryModel = mongoose.model('orders', OrderHistorySchema);