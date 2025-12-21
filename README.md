User: push my project to git

GitHub Copilot: I'll help you push your project to git. Let me first check the current git status. 

Ran terminal command: git status

Good! You have a git repository with a remote configured. You have some files staged and others that need to be added. Let me add all the changes and push: 

Ran terminal command: git add .

Ran terminal command: git commit -m "Add new features: Cart, Checkout, Product Detail, Query Form, and server setup"

Ran terminal command: git push

There's a permission error. The repository belongs to `Manas034` but you're authenticated as `vaibhavwaliaa` who doesn't have push access. You have a few options:

1. **Fork the repository** to your own GitHub account and push there
2. **Ask Manas034 to add you as a collaborator** on the repository
3. **Update the remote URL** to point to your own repository

Which option would you like to proceed with? Or if you have your own repository URL, I can update the remote for you.

User: give me description of buransh mattress projexct to upload on git

GitHub Copilot: Read [](file:///c%3A/Study/MattresWebsiteRevenueGen/Project/package.json)

Read [](file:///c%3A/Study/MattresWebsiteRevenueGen/Project/README.md)

Read [](file:///c%3A/Study/MattresWebsiteRevenueGen/Project/server/server.js#1-1), lines 1 to 30

Based on the project structure and files, here's a comprehensive description for your GitHub repository:

---

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

Your Name - Mattress E-Commerce Platform

---

⭐ Star this repo if you find it helpful!

---

You can use this description for your GitHub repository's README.md file. It provides a comprehensive overview of your project's features, tech stack, and setup instructions.
