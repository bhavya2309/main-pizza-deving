import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import OrderHistoryRouter from './modules/order_history/routes/order_hist-routes.js';
import { createConnection } from './shared/db/connection.js';
import UserRouter from './modules/users/routes/user.route.js';
import ProductsRouter from './modules/products/routes/products-routes.js'
import cors from 'cors';
import SearchRouter from  './modules/searching/search-router.js';

dotenv.config();
const app = express();
app.use(cors());

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Order history routes
app.use('/', OrderHistoryRouter);
// user login / signup routes
app.use('/', UserRouter);
//product 
app.use('/', ProductsRouter);
//search
app.use('/', SearchRouter);

// Database connection
createConnection()
  .then(() => {
    // Start server
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.log('Application can\'t run as DB connection failed:', err);
    process.exit(1); // Exit the process with a failure code
  });
