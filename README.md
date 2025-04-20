/*
# 🛒 Shopping Cart System

A lightweight Node.js + Express API that calculates the total cost of shopping cart items with special pricing rules.

## ✅ Features
- Add items to a shopping cart
- View cart contents
- Calculate total price with promotional offers:
  - Apples: £0.35 each
  - Bananas: £0.20 each
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
If any feature couldn't be implemented (like real-time sync or Python reporting tool), document the approach or reasoning in this section before submission.
*/