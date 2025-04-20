const express = require('express');
const ShoppingCart = require('./cart');
const app = express();
const cart = new ShoppingCart();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Add item to cart
app.post('/cart/add', (req, res) => {
  const { item } = req.body;
  if (!item || typeof item !== 'string') {
    return res.status(400).json({ error: 'Invalid item' });
  }
  cart.addItem(item);
  res.json({ message: `${item} added to cart`, cart: cart.viewCart() });
});

// View cart
app.get('/cart', (req, res) => {
  res.json({ cart: cart.viewCart() });
});

// Get total
app.get('/cart/total', (req, res) => {
  const totalFormatted = cart.getTotalFormattedINR();
  res.json({ total: totalFormatted });
});

// Clear cart
app.post('/cart/clear', (req, res) => {
  cart.clearCart();
  res.json({ message: 'Cart cleared' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});