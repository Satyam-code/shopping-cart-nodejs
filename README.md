/*
# 🛒 Shopping Cart System

A lightweight Node.js + Express API that calculates the total cost of shopping cart items with special pricing rules.

## ✅ Features
- Add items to a shopping cart
- View cart contents
- Calculate total price with promotional offers:
  - Apples: 35p each
  - Bananas: 20p each
  - Melons: Buy One Get One Free (BOGO)
  - Limes: 3 for the price of 2

## 📦 Installation
```bash
npm install
```

## 🚀 Run the App
```bash
node server.js
```

Server will start on `http://localhost:3000`

## 📮 API Endpoints
### Add Item
```http
POST /cart/add
Content-Type: application/json
{
  "item": "Apple"
}
```

### View Cart
```http
GET /cart
```

### Get Total
```http
GET /cart/total
```

### Clear Cart
```http
POST /cart/clear
```

## 🧪 Testing (Optional)
You can test the APIs using tools like Postman or `curl`.

## 💡 Notes
Optional modules such as real-time synchronization and the Python reporting utility were not implemented. This is primarily because my experience and current development environment are focused on JavaScript and Node.js. I have not worked with Python, so I chose to focus on building a robust and well-tested core API.
*/