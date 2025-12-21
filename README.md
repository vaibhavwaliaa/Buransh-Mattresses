# 🛏️ Buransh Mattress - E-Commerce Website

A modern, full-stack e-commerce platform for Buransh Mattress Company, built with React and Node.js. This website showcases premium mattress products with a seamless shopping experience, complete cart functionality, and integrated order management system.

## ✨ Features

### Frontend
- **Modern UI/UX**: Built with React 19 and styled with Tailwind CSS for a responsive, mobile-first design
- **Product Showcase**: Interactive mattress catalog featuring multiple product lines:
  - Vedic Buransh Series
  - Medic Buransh Plus
  - Orthomedic Series
  - Buransh Soft & Soft Plus
- **Shopping Cart**: Full-featured cart with add/remove functionality and real-time price calculations
- **Product Details**: Detailed product pages with specifications and high-quality images
- **Checkout System**: Complete checkout flow with customer information collection
- **Query Form**: Floating query button for customer inquiries
- **Dynamic Notifications**: Real-time user feedback for actions
- **Smooth Navigation**: React Router integration for seamless page transitions

### Backend
- **RESTful API**: Express.js server for handling orders and customer queries
- **Database**: MongoDB integration for order storage and management
- **Email Service**: Nodemailer integration for order confirmations and notifications
- **CORS Enabled**: Secure cross-origin resource sharing configuration
- **Environment Variables**: Secure configuration management with dotenv

## 🛠️ Tech Stack

**Frontend:**
- React 19.1
- Vite (Build tool)
- Tailwind CSS 4.1
- React Router DOM
- Lucide React (Icons)
- Remixicon

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- Nodemailer
- CORS

## 📦 Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd Project
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install server dependencies**
```bash
cd server
npm install
cd ..
```

4. **Configure environment variables**
Create a .env file in the root directory (see `.env.example` for reference)

5. **Set up MongoDB**
Follow the instructions in MONGODB_SETUP.md

6. **Configure email service**
Follow the instructions in EMAIL_SETUP.md

## 🚀 Running the Application

**Development mode (Frontend):**
```bash
npm run dev
```

**Start the server:**
```bash
npm run server
```

**Production build:**
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
├── public/              # Static assets (product images)
├── server/              # Backend server
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   └── server.js       # Express server
├── src/
│   ├── components/     # React components
│   │   ├── Cart/      # Shopping cart components
│   │   ├── Checkout/  # Checkout flow
│   │   ├── ProductDetail/
│   │   ├── Section1/  # Hero section
│   │   ├── Section2/  # Product catalog
│   │   └── Section3/  # Additional sections
│   ├── context/       # React Context (Cart, Theme)
│   ├── assets/        # Images and static files
│   └── App.jsx        # Main app component
├── EMAIL_SETUP.md      # Email configuration guide
├── MONGODB_SETUP.md    # Database setup guide
└── QUERY_FORM_SETUP.md # Query form integration guide
```

## 📋 Documentation

- MongoDB Setup Guide
- Email Configuration
- Query Form Setup

## 🎯 Key Features Implemented

- ✅ Complete shopping cart functionality
- ✅ Order management system
- ✅ Email notifications
- ✅ Customer query form
- ✅ Responsive design for all devices
- ✅ Product catalog with detailed views
- ✅ Checkout and payment information collection
- ✅ MongoDB integration for data persistence

## 🔧 Configuration

The application requires the following environment variables:
- `MONGODB_URI` - MongoDB connection string
- Email service credentials (see EMAIL_SETUP.md)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is for educational/commercial purposes.

## 👨‍💻 Author

Vaibhav Walia - Buransh Mattress E-Commerce Platform

---

⭐ Star this repo if you find it helpful!
