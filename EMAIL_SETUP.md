# Email Setup Instructions for Query Form

## Overview
Your website now has a floating "Any Queries?" button that appears on all pages. When users click it, they can submit queries that will be sent directly to vaibhavwalia9091@gmail.com.

## Setup Steps

### 1. Install nodemailer Package
Run this command in your terminal:
```bash
npm install nodemailer
```

### 2. Configure Gmail for Sending Emails

You need to set up a Gmail account to send emails from. Follow these steps:

#### Option A: Using App Password (Recommended)
1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** if not already enabled
4. Go to **App passwords** (you'll see this option after enabling 2-Step Verification)
5. Select app: **Mail**
6. Select device: **Other (Custom name)** → Type "Mattress Website"
7. Click **Generate**
8. Copy the 16-character password (no spaces)

#### Option B: Using Less Secure Apps (Not Recommended)
1. Go to https://myaccount.google.com/lesssecureapps
2. Turn on "Allow less secure apps"
3. Use your regular Gmail password

### 3. Update .env File

Open the `.env` file in your project root and update these values:

```env
# Replace with the Gmail you want to SEND from
EMAIL_USER=your-gmail@gmail.com

# Use the App Password you generated (no spaces)
EMAIL_PASS=abcd efgh ijkl mnop

# This is already set - where queries will be received
RECIPIENT_EMAIL=vaibhavwalia9091@gmail.com
```

### 4. Start Your Server

Make sure your backend server is running:
```bash
npm run server
```

The server should now be running on `http://localhost:3000`

### 5. Start Your Frontend

In a separate terminal, run:
```bash
npm run dev
```

## Testing the Query Form

1. Open your website in the browser
2. You'll see a blue floating button at the bottom-right corner saying "Any Queries?"
3. Click on it to open the query form
4. Fill in the form with test data
5. Click "Send Query"
6. Check vaibhavwalia9091@gmail.com inbox for the query email

## Features

- ✅ Floating button appears on ALL pages
- ✅ Beautiful modal popup with form
- ✅ Email sent to vaibhavwalia9091@gmail.com
- ✅ Includes customer name, email, phone, and message
- ✅ Success/error feedback messages
- ✅ Responsive design (works on mobile)
- ✅ Loading state while sending

## Email Format

The email you receive will include:
- Customer's name
- Customer's email (you can reply directly)
- Customer's phone number (if provided)
- Their query message
- Formatted in a nice HTML template

## Troubleshooting

### Email not sending?
1. Check if nodemailer is installed: `npm list nodemailer`
2. Verify your .env file has correct EMAIL_USER and EMAIL_PASS
3. Make sure you're using an App Password, not your regular Gmail password
4. Check server console for error messages
5. Ensure PORT in .env matches the one in FloatingQueryButton.jsx (currently 3000)

### Button not appearing?
1. Check browser console for errors
2. Make sure FloatingQueryButton component is imported in App.jsx
3. Clear browser cache and reload

### Form submission fails?
1. Check if backend server is running on port 3000
2. Look for CORS errors in browser console
3. Verify the API endpoint URL in FloatingQueryButton.jsx matches your server port

## Security Notes

- ✅ Email credentials stored in .env file (not committed to git)
- ✅ .env file should be in .gitignore
- ✅ Using App Password instead of main Gmail password
- ✅ Form validation prevents empty submissions

## Customization

### Change Button Text
Edit `FloatingQueryButton.jsx` line 66:
```jsx
<span className="hidden sm:inline">Your Custom Text</span>
```

### Change Button Position
Edit `FloatingQueryButton.jsx` line 61, change classes:
- `bottom-8 right-8` → Change to your preferred position

### Change Colors
The button and modal use blue theme. To change colors, edit the Tailwind classes in `FloatingQueryButton.jsx`.

## Support

If you need help setting this up, you can:
1. Check the error messages in browser console (F12)
2. Check server logs in terminal
3. Verify all npm packages are installed
4. Ensure MongoDB and server are both running
