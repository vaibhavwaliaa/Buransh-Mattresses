import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  // Contact Information
  contactInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true }
  },
  
  // Shipping Address
  shippingAddress: {
    firstName: { type: String, required: true },
    lastName: String,
    address: { type: String, required: true },
    landmark: String,
    pincode: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, default: 'India' }
  },
  
  // Billing Address
  billingAddress: {
    firstName: String,
    lastName: String,
    address: String,
    pincode: String,
    city: String,
    state: String,
    country: String,
    sameAsShipping: { type: Boolean, default: true }
  },
  
  // Order Items
  items: [{
    id: String,
    name: String,
    fullName: String,
    image: String,
    price: Number,
    quantity: Number,
    description: String,
    selectedSize: String,
    selectedThickness: String
  }],
  
  // Order Details
  orderTotal: { type: Number, required: true },
  deliveryCharge: { type: Number, default: 0 },
  
  // Payment Information
  paymentMethod: { type: String, required: true },
  
  // Additional Info
  isGift: { type: Boolean, default: false },
  gstNumber: String,
  keepUpdated: { type: Boolean, default: false },
  
  // Order Status
  orderStatus: { type: String, default: 'Pending' },
  
  // Timestamps
  orderDate: { type: Date, default: Date.now }
}, {
  timestamps: true
})

export default mongoose.model('Order', orderSchema)
