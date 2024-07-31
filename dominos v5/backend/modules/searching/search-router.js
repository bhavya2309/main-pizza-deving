// routes/search.js
import express from 'express';
import mongoose from 'mongoose';
import { ProductModel } from "../products/models/product-schema.js";
const router = express.Router();



router.get('/search', async (req, res) => {
  try {
    const { q } = req.query; // The search query
    if (!q) {
      return res.status(400).json({ error: 'Query not provided' });
    }

    const results = await ProductModel.find({ name: new RegExp(q, 'i') });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

export default router;
