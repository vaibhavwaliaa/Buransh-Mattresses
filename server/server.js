import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import Order from './models/Order.js'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Mattress-store'

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully!')
    console.log('📊 Database: Mattress-store')
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error)
  })

// Routes

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Mattress Store API is running!' })
})

// Create new order
app.post('/api/orders', async (req, res) => {
  try {
    const orderData = req.body
    
    console.log('📦 New order received:', {
      customer: orderData.contactInfo.firstName + ' ' + orderData.contactInfo.lastName,
      email: orderData.contactInfo.email,
      items: orderData.items.length,
      total: orderData.orderTotal
    })
    
    const order = new Order(orderData)
    const savedOrder = await order.save()
    
    console.log('✅ Order saved successfully! Order ID:', savedOrder._id)
    
    res.status(201).json({
      success: true,
      message: 'Order placed successfully!',
      orderId: savedOrder._id,
      order: savedOrder
    })
  } catch (error) {
    console.error('❌ Error saving order:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to place order',
      error: error.message
    })
  }
})

// Get all orders
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 })
    res.json({
      success: true,
      count: orders.length,
      orders
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders',
      error: error.message
    })
  }
})

// Get order by ID
app.get('/api/orders/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      })
    }
    res.json({
      success: true,
      order
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch order',
      error: error.message
    })
  }
})

// Update order status
app.patch('/api/orders/:id/status', async (req, res) => {
  try {
    const { orderStatus } = req.body
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus },
      { new: true }
    )
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      })
    }
    
    res.json({
      success: true,
      message: 'Order status updated',
      order
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update order',
      error: error.message
    })
  }
})

// Email configuration for queries
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

// Handle customer queries
app.post('/api/query', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body
    
    console.log('📧 New query received from:', name)
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Query from ${name} - Mattress Website`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #3b82f6; border-radius: 10px;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            🛏️ New Customer Query
          </h2>
          
          <div style="background-color: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Customer Details:</h3>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
            ${phone ? `<p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
          </div>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Query:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px;">
              This query was submitted from your mattress website contact form.<br>
              Reply directly to the customer's email: <a href="mailto:${email}" style="color: #3b82f6;">${email}</a>
            </p>
          </div>
        </div>
      `
    }
    
    // Send email
    await transporter.sendMail(mailOptions)
    
    console.log(`✅ Query email sent successfully to ${process.env.RECIPIENT_EMAIL}`)
    
    res.json({
      success: true,
      message: 'Query sent successfully!'
    })
  } catch (error) {
    console.error('❌ Error sending query email:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send query',
      error: error.message
    })
  }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/orders`)
  console.log(`📧 Query endpoint: http://localhost:${PORT}/api/query`)
})
