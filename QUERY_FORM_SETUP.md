# Query Form Implementation - Quick Start

## ✅ What Was Done

1. **Created FloatingQueryButton Component**
   - Floating blue button appears on ALL pages
   - Text: "Any Queries?"
   - Opens a modal with contact form
   
2. **Added Email Backend**
   - New API endpoint: `POST /api/query`
   - Sends emails to: vaibhavwalia9091@gmail.com
   - Uses nodemailer with Gmail
   
3. **Installed Required Package**
   - ✅ nodemailer installed

## 🚀 Quick Setup (2 Minutes)

### Step 1: Configure Email
Open `.env` file and replace these two lines:

```env
EMAIL_USER=your-email@gmail.com          ← Your Gmail
EMAIL_PASS=your-app-password-here        ← App Password from Gmail
```

**To get App Password:**
1. Go to: https://myaccount.google.com/security
2. Enable 2-Step Verification
3. Click "App passwords"
4. Generate password for "Mail" → "Other"
5. Copy the 16-character password

### Step 2: Start Server
```bash
npm run server
```

### Step 3: Start Frontend
```bash
npm run dev
```

### Step 4: Test It!
1. Open your website
2. Click the blue "Any Queries?" button (bottom-right)
3. Fill the form
4. Check vaibhavwalia9091@gmail.com for the email

## 📧 Email Details

**Emails will be sent to:** vaibhavwalia9091@gmail.com

**Email will contain:**
- Customer's name
- Customer's email (can reply directly)
- Customer's phone
- Their query message
- Nicely formatted HTML template

## 🎨 Features

- ✨ Appears on every page automatically
- 📱 Responsive (works on mobile)
- ⚡ Loading state while sending
- ✅ Success/error messages
- 🎯 Form validation
- 💙 Blue theme matching your site

## ⚠️ Important Notes

1. Server port is now **3000** (was 5000)
2. Update your checkout page if it calls the orders API - change port to 3000
3. Don't commit .env file with real credentials

## 📝 Full Setup Instructions

See `EMAIL_SETUP.md` for detailed instructions and troubleshooting.
