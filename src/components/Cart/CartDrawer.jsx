import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const CartDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const { 
    cartItems, 
    compareItems, 
    removeFromCart, 
    updateQuantity, 
    removeFromCompare, 
    cartTotal, 
    cartCount 
  } = useCart()
  
  const [activeTab, setActiveTab] = useState('cart')
  const [showComparison, setShowComparison] = useState(false)

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-white" style={{ zIndex: 99999 }}>
      {/* Full Screen Cart */}
      <div className="flex flex-col h-screen overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-xl">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">
                  {activeTab === 'cart' ? '🛒 Shopping Cart' : '⚖️ Compare'}
                </h2>
                <p className="text-blue-100 text-sm">
                  {activeTab === 'cart' 
                    ? `${cartCount} ${cartCount === 1 ? 'item' : 'items'} in your cart` 
                    : `${compareItems.length} products to compare`
                  }
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-all duration-200 group"
                aria-label="Close cart"
              >
                <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Tabs with modern design */}
            <div className="flex gap-3">
              <button
                onClick={() => setActiveTab('cart')}
                className={`flex-1 py-3 px-5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'cart'
                    ? 'bg-white text-blue-600 shadow-xl'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span>Cart</span>
                  {cartItems.length > 0 && (
                    <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                      {cartItems.length}
                    </span>
                  )}
                </div>
              </button>
              <button
                onClick={() => setActiveTab('compare')}
                className={`flex-1 py-3 px-5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'compare'
                    ? 'bg-white text-blue-600 shadow-xl'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span>Compare</span>
                  {compareItems.length > 0 && (
                    <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                      {compareItems.length}
                    </span>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Content with custom scrollbar - Full Screen Layout */}
        <div className="flex-1 overflow-hidden bg-gray-50">
          {activeTab === 'cart' ? (
            // Cart Tab Content
            <>
              {cartItems.length === 0 ? (
                <div className="h-full overflow-y-auto" style={{ 
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#3b82f6 #e5e7eb'
                }}>
                  <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="flex flex-col items-center justify-center text-center py-32 animate-fade-in">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                      <svg className="w-40 h-40 text-gray-400 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <p className="text-3xl font-bold text-gray-800 mb-3">Your cart is empty</p>
                    <p className="text-gray-500 mb-8 text-lg">Discover amazing mattresses for better sleep</p>
                    <button 
                      onClick={onClose}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-12 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Start Shopping
                    </button>
                  </div>
                </div>
                </div>
              ) : (
                <div className="h-full flex flex-col lg:flex-row">
                  {/* Left Side - Cart Items */}
                  <div className="flex-1 overflow-y-auto p-6 lg:pr-3" style={{ 
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#3b82f6 #e5e7eb'
                  }}>
                    <div className="max-w-4xl mx-auto space-y-4">
                      {cartItems.map((item, index) => (
                        <div 
                          key={item.id} 
                          className="group bg-white border-2 border-gray-100 rounded-2xl p-5 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="flex gap-5">
                            {/* Product Image */}
                            <div className="relative w-32 h-32 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>

                            {/* Product Info */}
                            <div className="flex-1 flex flex-col min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex-1 pr-4">
                                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{item.fullName}</h3>
                                  <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                                </div>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-gray-400 hover:text-red-500 p-2 hover:bg-red-50 rounded-lg transition-all group/btn shrink-0"
                                  aria-label="Remove item"
                                >
                                  <svg className="w-5 h-5 group-hover/btn:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </div>
                              
                              {/* Price and Quantity */}
                              <div className="mt-auto flex items-end justify-between">
                                <div>
                                  <div className="flex items-baseline gap-2 mb-2">
                                    <p className="text-2xl font-bold text-blue-600">₹{item.price.toLocaleString()}</p>
                                    {item.quantity > 1 && (
                                      <span className="text-sm text-gray-500">
                                        × {item.quantity} = ₹{(item.price * item.quantity).toLocaleString()}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                
                                {/* Quantity Controls */}
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-semibold text-gray-700">Qty:</span>
                                  <div className="flex items-center gap-1 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-1 border-2 border-blue-200">
                                    <button
                                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                      disabled={item.quantity <= 1}
                                      className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-white rounded transition-all font-bold disabled:opacity-40 disabled:cursor-not-allowed"
                                    >
                                      −
                                    </button>
                                    <span className="text-base font-bold px-3 text-blue-700">{item.quantity}</span>
                                    <button
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                      className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-white rounded transition-all font-bold"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Order Summary (Footer moved here) */}
                  <div className="w-full lg:w-96 border-l-2 border-gray-200 bg-white flex flex-col">
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Free Shipping Badge */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 mb-6">
                        <div className="flex items-center gap-3">
                          <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <p className="text-base font-bold text-green-800">🎉 Free Shipping!</p>
                            <p className="text-sm text-green-700">Save ₹200 on delivery</p>
                          </div>
                        </div>
                      </div>

                      {/* Price Summary */}
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between text-base">
                          <span className="text-gray-600">Subtotal ({cartCount} {cartCount === 1 ? 'item' : 'items'})</span>
                          <span className="font-bold text-gray-900 text-lg">₹{cartTotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-base">
                          <span className="text-gray-600">Delivery Charges</span>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400 line-through text-sm">₹200</span>
                            <span className="font-bold text-green-600 text-lg">FREE</span>
                          </div>
                        </div>
                        <div className="pt-4 border-t-2 border-dashed">
                          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
                            <div className="flex justify-between items-center">
                              <span className="font-bold text-xl text-gray-900">Grand Total:</span>
                              <span className="font-bold text-4xl bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                                ₹{cartTotal.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-auto space-y-3">
                        <button 
                          onClick={() => {
                            onClose()
                            navigate('/checkout')
                          }}
                          className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                          <span>Proceed to Checkout</span>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </button>
                        <button 
                          onClick={onClose}
                          className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 hover:border-blue-300 transition-all transform hover:scale-[1.01]"
                        >
                          Continue Shopping
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
              // Compare Tab Content
              <div className="h-full overflow-y-auto p-6" style={{ 
                scrollbarWidth: 'thin',
                scrollbarColor: '#3b82f6 #e5e7eb'
              }}>
                {showComparison && compareItems.length >= 2 ? (
                  // Detailed Comparison View - Side by Side
                  <div className="space-y-6">
                    <button
                      onClick={() => setShowComparison(false)}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to list
                    </button>
                    
                    {/* Side-by-Side Comparison Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {compareItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-2xl transition-all">
                          {/* Product Image */}
                          <div className="relative w-full aspect-square bg-gradient-to-br from-blue-50 to-blue-100">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Product Info */}
                          <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                            
                            {/* Price */}
                            <div className="flex items-baseline gap-2">
                              <span className="text-3xl font-bold text-blue-600">₹{item.price.toLocaleString()}</span>
                              {item.originalPrice && (
                                <span className="text-sm text-gray-400 line-through">₹{item.originalPrice.toLocaleString()}</span>
                              )}
                            </div>
                            
                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                            
                            {/* Features */}
                            <div>
                              <h4 className="font-bold text-gray-900 mb-2 text-sm">Key Features:</h4>
                              <ul className="space-y-2">
                                {item.features?.slice(0, 4).map((feature, idx) => (
                                  <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Remove Button */}
                            <button
                              onClick={() => removeFromCompare(item.id)}
                              className="w-full mt-4 border-2 border-red-200 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-50 transition-all flex items-center justify-center gap-2"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              Remove from Comparison
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Compare List View
                  <>
                    {compareItems.length === 0 ? (
                      <div className="flex flex-col items-center justify-center text-center py-32">
                        <div className="relative mb-8">
                          <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                          <svg className="w-40 h-40 text-gray-400 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <p className="text-3xl font-bold text-gray-800 mb-3">No products to compare</p>
                        <p className="text-gray-500 mb-8 text-lg">Add up to 3 mattresses to compare their features</p>
                        <button 
                          onClick={onClose}
                          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-12 py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          Browse Mattresses
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {/* Progress indicator */}
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6 shadow-lg">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <span className="text-2xl font-bold text-blue-900">
                                {compareItems.length} / 3
                              </span>
                              <span className="text-base text-blue-700 ml-3">Products Added</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {compareItems.length < 2 ? (
                                <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-4 py-2 rounded-full border-2 border-orange-200">
                                  ⚠️ Add {2 - compareItems.length} more to compare
                                </span>
                              ) : (
                                <span className="text-sm font-semibold text-green-600 bg-green-50 px-4 py-2 rounded-full border-2 border-green-200">
                                  ✓ Ready to compare
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="w-full bg-blue-200 rounded-full h-4 shadow-inner">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all duration-500 shadow-lg"
                              style={{ width: `${(compareItems.length / 3) * 100}%` }}
                            />
                          </div>
                        </div>

                        {/* Compare Items - Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {compareItems.map((item, index) => (
                            <div 
                              key={item.id} 
                              className="group bg-white border-2 border-blue-100 rounded-2xl p-6 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              {/* Product Image */}
                              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                                  {index + 1}
                                </div>
                                <button
                                  onClick={() => removeFromCompare(item.id)}
                                  className="absolute top-3 right-3 text-white bg-red-500 hover:bg-red-600 p-2 rounded-full transition-all shadow-lg group/btn"
                                >
                                  <svg className="w-5 h-5 group-hover/btn:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </div>

                              {/* Product Info */}
                              <div className="space-y-3">
                                <h3 className="font-bold text-gray-900 text-lg leading-tight">{item.fullName}</h3>
                                <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                                <div className="flex items-baseline gap-2">
                                  <p className="text-3xl font-bold text-blue-600">₹{item.price.toLocaleString()}</p>
                                  {item.originalPrice && (
                                    <span className="text-sm text-gray-400 line-through">₹{item.originalPrice.toLocaleString()}</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Compare Button */}
                        {compareItems.length >= 2 && (
                          <button 
                            onClick={() => setShowComparison(true)}
                            className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-6 rounded-2xl font-bold text-xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <span>View Detailed Comparison</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
      </div>
    </div>
  )
}

export default CartDrawer
