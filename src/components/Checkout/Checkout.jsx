import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const Checkout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { cartItems, cartTotal, clearCart } = useCart()
  
  // Get items from location state (for Buy Now) or use cart items
  const checkoutItems = location.state?.items || cartItems
  const checkoutTotal = location.state?.total || cartTotal
  const isBuyNow = location.state?.isBuyNow || false

  const [step, setStep] = useState(1)
  const [keepUpdated, setKeepUpdated] = useState(false)
  const [isGift, setIsGift] = useState(false)
  const [sameAsShipping, setSameAsShipping] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState('online')
  
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: ''
  })
  
  const [shippingAddress, setShippingAddress] = useState({
    firstName: '',
    lastName: '',
    address: '',
    landmark: '',
    pincode: '',
    city: '',
    state: '',
    country: 'India',
    makeDefault: false,
    addToBook: false
  })
  
  const [billingAddress, setBillingAddress] = useState({
    firstName: '',
    lastName: '',
    address: '',
    landmark: '',
    pincode: '',
    city: '',
    state: '',
    country: 'India'
  })
  
  const [gstNumber, setGstNumber] = useState('')
  const [showGST, setShowGST] = useState(false)

  const handleContactSubmit = (e) => {
    e.preventDefault()
    if (contactInfo.firstName && contactInfo.email && contactInfo.mobile) {
      setStep(2)
    }
  }

  const handleShippingSubmit = (e) => {
    e.preventDefault()
    if (shippingAddress.firstName && shippingAddress.address && shippingAddress.pincode && shippingAddress.city && shippingAddress.state) {
      setStep(3)
    }
  }

  const handlePlaceOrder = async (e) => {
    e.preventDefault()
    
    // Prepare order data
    const orderData = {
      contactInfo: {
        firstName: contactInfo.firstName,
        lastName: contactInfo.lastName,
        email: contactInfo.email,
        mobile: contactInfo.mobile
      },
      shippingAddress: {
        firstName: shippingAddress.firstName,
        lastName: shippingAddress.lastName,
        address: shippingAddress.address,
        landmark: shippingAddress.landmark,
        pincode: shippingAddress.pincode,
        city: shippingAddress.city,
        state: shippingAddress.state,
        country: shippingAddress.country
      },
      billingAddress: sameAsShipping ? {
        sameAsShipping: true
      } : {
        firstName: billingAddress.firstName,
        lastName: billingAddress.lastName,
        address: billingAddress.address,
        pincode: billingAddress.pincode,
        city: billingAddress.city,
        state: billingAddress.state,
        country: billingAddress.country,
        sameAsShipping: false
      },
      items: checkoutItems.map(item => ({
        id: item.id,
        name: item.name,
        fullName: item.fullName || item.name,
        image: item.image,
        price: item.price,
        quantity: item.quantity || 1,
        description: item.description,
        selectedSize: item.selectedSize || 'Not specified',
        selectedThickness: item.selectedThickness || 'Not specified'
      })),
      orderTotal: checkoutTotal,
      deliveryCharge: 0,
      paymentMethod: paymentMethod,
      isGift: isGift,
      gstNumber: gstNumber,
      keepUpdated: keepUpdated
    }
    
    try {
      console.log('📦 Sending order to backend...', orderData)
      
      // Send order to backend
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      })
      
      console.log('📡 Response status:', response.status)
      
      const result = await response.json()
      console.log('📝 Response data:', result)
      
      if (result.success) {
        alert(`✅ Order placed successfully!\nOrder ID: ${result.orderId}\n\nCheck MongoDB Compass - click the refresh button!`)
        
        // Clear cart if not buy now
        if (!isBuyNow) {
          clearCart()
        }
        
        // Redirect to home
        navigate('/')
      } else {
        alert(`❌ Failed to place order.\nError: ${result.message}`)
      }
    } catch (error) {
      console.error('❌ Error placing order:', error)
      alert(`❌ Error placing order!\nMake sure the backend server is running at http://localhost:5000\n\nError: ${error.message}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-200 rounded-full transition-all"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-4xl font-bold text-gray-900">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              </div>
              
              {step >= 1 && (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={contactInfo.firstName}
                        onChange={(e) => setContactInfo({...contactInfo, firstName: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={contactInfo.lastName}
                        onChange={(e) => setContactInfo({...contactInfo, lastName: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email ID<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile number<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={contactInfo.mobile}
                      onChange={(e) => setContactInfo({...contactInfo, mobile: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="10 digit mobile number"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={keepUpdated}
                        onChange={(e) => setKeepUpdated(e.target.checked)}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Keep me updated on exclusive offers</span>
                    </label>
                    
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isGift}
                        onChange={(e) => setIsGift(e.target.checked)}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">This order is a gift</span>
                    </label>
                  </div>
                  
                  {step === 1 && (
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    >
                      CONTINUE AS GUEST
                    </button>
                  )}
                </form>
              )}
            </div>

            {/* Step 2: Shipping Address */}
            <div className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${step >= 2 ? 'border-blue-200' : 'border-gray-200'} ${step < 2 ? 'opacity-50' : ''}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Shipping Address</h2>
              </div>
              
              {step >= 2 && (
                <form onSubmit={handleShippingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingAddress.firstName}
                        onChange={(e) => setShippingAddress({...shippingAddress, firstName: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last name</label>
                      <input
                        type="text"
                        value={shippingAddress.lastName}
                        onChange={(e) => setShippingAddress({...shippingAddress, lastName: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Address<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={shippingAddress.address}
                      onChange={(e) => setShippingAddress({...shippingAddress, address: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Landmark</label>
                    <input
                      type="text"
                      value={shippingAddress.landmark}
                      onChange={(e) => setShippingAddress({...shippingAddress, landmark: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Pincode<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        pattern="[0-9]{6}"
                        value={shippingAddress.pincode}
                        onChange={(e) => setShippingAddress({...shippingAddress, pincode: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="6 digit pincode"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        City<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingAddress.city}
                        onChange={(e) => setShippingAddress({...shippingAddress, city: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        State<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingAddress.state}
                        onChange={(e) => setShippingAddress({...shippingAddress, state: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Country<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingAddress.country}
                        onChange={(e) => setShippingAddress({...shippingAddress, country: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={shippingAddress.makeDefault}
                        onChange={(e) => setShippingAddress({...shippingAddress, makeDefault: e.target.checked})}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Make default address</span>
                    </label>
                    
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={shippingAddress.addToBook}
                        onChange={(e) => setShippingAddress({...shippingAddress, addToBook: e.target.checked})}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Add to address book</span>
                    </label>
                  </div>
                  
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowGST(!showGST)}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      {showGST ? '- Remove' : '+ Add'} GST number
                    </button>
                    
                    {showGST && (
                      <input
                        type="text"
                        value={gstNumber}
                        onChange={(e) => setGstNumber(e.target.value)}
                        placeholder="Enter GST number"
                        className="w-full mt-2 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    )}
                  </div>
                  
                  {step === 2 && (
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    >
                      CONTINUE TO PAYMENT
                    </button>
                  )}
                </form>
              )}
            </div>

            {/* Step 3: Billing Address */}
            <div className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${step >= 3 ? 'border-blue-200' : 'border-gray-200'} ${step < 3 ? 'opacity-50' : ''}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  3
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Billing Address</h2>
              </div>
              
              {step >= 3 && (
                <div className="space-y-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sameAsShipping}
                      onChange={(e) => setSameAsShipping(e.target.checked)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm font-semibold text-gray-700">Same as shipping address</span>
                  </label>
                  
                  {!sameAsShipping && (
                    <div className="space-y-4 pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">First name<span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            required
                            value={billingAddress.firstName}
                            onChange={(e) => setBillingAddress({...billingAddress, firstName: e.target.value})}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Last name</label>
                          <input
                            type="text"
                            value={billingAddress.lastName}
                            onChange={(e) => setBillingAddress({...billingAddress, lastName: e.target.value})}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Address<span className="text-red-500">*</span></label>
                        <textarea
                          required
                          rows={3}
                          value={billingAddress.address}
                          onChange={(e) => setBillingAddress({...billingAddress, address: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode<span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            required
                            pattern="[0-9]{6}"
                            value={billingAddress.pincode}
                            onChange={(e) => setBillingAddress({...billingAddress, pincode: e.target.value})}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">City<span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            required
                            value={billingAddress.city}
                            onChange={(e) => setBillingAddress({...billingAddress, city: e.target.value})}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Step 4: Payment Method */}
            <div className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${step >= 3 ? 'border-blue-200' : 'border-gray-200'} ${step < 3 ? 'opacity-50' : ''}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  4
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Payment Method</h2>
              </div>
              
              {step >= 3 && (
                <form onSubmit={handlePlaceOrder} className="space-y-4">
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 transition-all">
                      <input
                        type="radio"
                        name="payment"
                        value="online"
                        checked={paymentMethod === 'online'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5 text-blue-600 mt-0.5"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-1">Online payment</div>
                        <div className="text-sm text-gray-600">Cards, UPI, Netbanking, EMI, Wallet</div>
                      </div>
                    </label>
                    
                    <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 transition-all">
                      <input
                        type="radio"
                        name="payment"
                        value="paylater"
                        checked={paymentMethod === 'paylater'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5 text-blue-600 mt-0.5"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-1">Pay Later</div>
                        <div className="text-sm text-gray-600">Pay ₹0.00 now, rest later - 0% EMI</div>
                      </div>
                    </label>
                    
                    <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 transition-all">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === 'cod'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5 text-blue-600 mt-0.5"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-1">Cash on Delivery</div>
                        <div className="text-sm text-gray-600">Pay when you receive the product</div>
                      </div>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-5 rounded-xl font-bold text-xl hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    PLACE ORDER
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                {checkoutItems.map((item) => (
                  <div key={item.id} className="flex gap-3 pb-4 border-b border-gray-200">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">{item.fullName || item.name}</h3>
                      {item.selectedSize && (
                        <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
                      )}
                      {item.selectedThickness && (
                        <p className="text-xs text-gray-500">Thickness: {item.selectedThickness}</p>
                      )}
                      <p className="text-sm text-gray-600 mb-1 mt-1">Qty: {item.quantity || 1}</p>
                      <p className="text-lg font-bold text-blue-600">₹{item.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 pt-4 border-t-2 border-gray-200">
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Price ({checkoutItems.length} {checkoutItems.length === 1 ? 'item' : 'items'})</span>
                  <span className="font-bold text-gray-900">₹{checkoutTotal.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Delivery Charges</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 line-through text-sm">₹200</span>
                    <span className="font-bold text-green-600">FREE</span>
                  </div>
                </div>
                
                <div className="pt-3 border-t-2 border-dashed flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg -mx-2">
                  <span className="font-bold text-lg text-gray-900">Total Amount</span>
                  <span className="font-bold text-3xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    ₹{checkoutTotal.toLocaleString()}
                  </span>
                </div>
                
                <p className="text-xs text-gray-500 text-center">Inclusive of all taxes</p>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm font-bold text-green-800">Free Shipping Applied!</p>
                    <p className="text-xs text-green-700">You're saving ₹200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
