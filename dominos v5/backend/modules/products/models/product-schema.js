import mongoose from 'mongoose';
const sizeSchema = new mongoose.Schema({
    size: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  });
  
const ProductSchema = mongoose.Schema({
    // userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // items: [ItemSchema], // Array of items in the order
    // payment: PaymentSchema, // Payment details
    // id: {
    //     type: Number,
    //     required: true,
    //     unique: true
    //   },
    //   name: {
    //     type: String,
    //     required: true
    //   },
    //   description: {
    //     type: String,
    //     required: true
    //   },
    //   price: {
    //     type: Number,
    //     required: true
    //   },
    //   image: {
    //     type: String,
    //     required: true
    //   },
    //   ingredients: {
    //     type: [String],
    //     required: true
    //   },
    //   sizes: {
    //     type: [sizeSchema],
    //     required: true
    //   }
    // });
  id: {type: Number,required: true,},
  name: {type: String,required: true},
  price: {type: String,required: true},
  menu_description: {type: String,required:true},
  classifications: {type: Boolean,required:true},
  assets: {
    menu: [{url: { type: String, required: true }}],product_details_page: [{url: { type: String, required: true }}]}
  });
    
  export const ProductModel = mongoose.model('pizzas', ProductSchema);
  