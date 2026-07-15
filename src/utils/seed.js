require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

const sampleProducts = [
  { name: 'Wireless Headphones', description: 'Noise-cancelling over-ear headphones', price: 2999, category: 'Electronics', brand: 'SoundMax', stock: 50, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop' },
  { name: 'Smartphone X200', description: '128GB storage, 6.5 inch display', price: 18999, category: 'Electronics', brand: 'Zenith', stock: 25, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop' },
  { name: 'Running Shoes', description: 'Lightweight breathable running shoes', price: 1499, category: 'Footwear', brand: 'Sprint', stock: 100, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop' },
  { name: 'Cotton T-Shirt', description: 'Casual round-neck cotton t-shirt', price: 499, category: 'Clothing', brand: 'Urban', stock: 200, rating: 4.0, imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop' },
  { name: 'Coffee Maker', description: 'Automatic drip coffee maker, 1.2L', price: 2499, category: 'Home & Kitchen', brand: 'BrewPro', stock: 40, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&h=600&fit=crop' },
  { name: 'Yoga Mat', description: 'Non-slip eco-friendly yoga mat', price: 799, category: 'Sports', brand: 'FlexFit', stock: 80, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=600&h=600&fit=crop' },
  { name: 'Backpack', description: 'Water-resistant laptop backpack', price: 1299, category: 'Accessories', brand: 'TrailPack', stock: 60, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop' },
  { name: 'Smart Watch', description: 'Fitness tracker with heart rate monitor', price: 3499, category: 'Electronics', brand: 'Zenith', stock: 30, rating: 4.0, imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop' },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.insertMany(sampleProducts);
    console.log('Sample products seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
