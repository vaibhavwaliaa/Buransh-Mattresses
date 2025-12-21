# MongoDB Setup Guide for Mattress Store

## 🎯 Complete Step-by-Step Guide

### Step 1: Set Up MongoDB Compass

1. **Open MongoDB Compass** application
2. **Create New Connection:**
   - You'll see the connection screen
   - In the connection string field, use: `mongodb://localhost:27017`
   - Click **"Connect"** button

3. **Create Database:**
   - After connecting, click the **"+"** button or **"Create Database"** button
   - **Database Name:** `mattress_store`
   - **Collection Name:** `orders`
   - Click **"Create Database"**

✅ Your MongoDB is now ready!

---

### Step 2: Start the Backend Server

Open a **NEW terminal** (don't close your Vite dev server) and run:

```bash
npm run server
```

You should see:
```
✅ Connected to MongoDB successfully!
📊 Database: mattress_store
🚀 Server is running on http://localhost:5000
```

---

### Step 3: Test Your Setup

1. **Keep both servers running:**
   - Terminal 1: `npm run dev` (Frontend on port 5173/5174)
   - Terminal 2: `npm run server` (Backend on port 5000)

2. **Place a test order:**
   - Go to your website
   - Add a product to cart OR click "Buy Now"
   - Go to checkout
   - Fill in the form with test data:
     - First Name: Test
     - Last Name: User
     - Email: test@example.com
     - Mobile: 9876543210
     - Address: 123 Test Street
     - Pincode: 110001
     - City: Delhi
     - State: Delhi
   - Click "PLACE ORDER"

3. **Check MongoDB Compass:**
   - Go back to MongoDB Compass
   - Click on `mattress_store` database
   - Click on `orders` collection
   - Click the **"Documents"** tab
   - You should see your order! 🎉

---

### Step 4: View Your Order Data

In MongoDB Compass, you'll see all order details:
```json
{
  "_id": "...",
  "contactInfo": {
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "mobile": "9876543210"
  },
  "shippingAddress": {
    "firstName": "Test",
    "address": "123 Test Street",
    "pincode": "110001",
    "city": "Delhi",
    "state": "Delhi",
    "country": "India"
  },
  "items": [
    {
      "id": "ortho",
      "name": "Ortho Mattress",
      "price": 15999,
      "quantity": 1
    }
  ],
  "orderTotal": 15999,
  "paymentMethod": "online",
  "orderStatus": "Pending",
  "orderDate": "2025-01-18T...",
  "createdAt": "2025-01-18T...",
  "updatedAt": "2025-01-18T..."
}
```

---

### What Data is Being Saved?

Each order contains:

✅ **Customer Information:**
- First Name, Last Name
- Email, Mobile Number

✅ **Shipping Address:**
- Full Address, Landmark
- Pincode, City, State, Country

✅ **Billing Address:**
- Same as shipping or separate

✅ **Order Items:**
- Product ID, Name, Image
- Price, Quantity, Description

✅ **Order Details:**
- Total Amount
- Payment Method (Online/COD/Pay Later)
- Delivery Charge
- GST Number (if provided)

✅ **Additional Info:**
- Is Gift
- Newsletter Subscription
- Order Status
- Order Date & Time

---

### Troubleshooting

**Problem:** "Failed to place order"
**Solution:** Make sure backend server is running (`npm run server`)

**Problem:** "MongoDB connection error"
**Solution:** 
1. Make sure MongoDB Compass is installed and running
2. Check if you can connect in Compass first
3. Make sure you created the database

**Problem:** Can't see orders in Compass
**Solution:**
1. Click the refresh button in Compass
2. Make sure you're looking at the right database (`mattress_store`)
3. Make sure you're in the `orders` collection

---

### API Endpoints Available

Your backend server has these endpoints:

- `GET /` - Health check
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get specific order
- `PATCH /api/orders/:id/status` - Update order status

---

### Next Steps

1. **View All Orders:** Open `http://localhost:5000/api/orders` in your browser
2. **Create More Orders:** Test with different products and data
3. **Check Compass:** See all orders in MongoDB Compass real-time

🎉 **Congratulations!** Your orders are now being saved to MongoDB!
