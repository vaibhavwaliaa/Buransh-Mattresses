import React, { createContext, useContext, useState } from 'react'
import DynamicNotification from '../components/DynamicNotification'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [compareItems, setCompareItems] = useState([])
  const [notification, setNotification] = useState(null)

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      if (existingItem) {
        setNotification({
          message: `${product.name} quantity updated in cart!`,
          type: 'cart'
        })
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      setNotification({
        message: `${product.name} added to cart!`,
        type: 'cart'
      })
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const addToCompare = (product) => {
    if (compareItems.length >= 3) {
      setNotification({
        message: 'You can only compare up to 3 mattresses at a time',
        type: 'warning'
      })
      return
    }
    if (compareItems.find(item => item.id === product.id)) {
      setNotification({
        message: 'This product is already in compare list',
        type: 'warning'
      })
      return
    }
    setNotification({
      message: `${product.name} added to compare list!`,
      type: 'compare'
    })
    setCompareItems(prev => [...prev, product])
  }

  const removeFromCompare = (productId) => {
    setCompareItems(prev => prev.filter(item => item.id !== productId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const clearCompare = () => {
    setCompareItems([])
  }

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        compareItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToCompare,
        removeFromCompare,
        clearCart,
        clearCompare,
        cartTotal,
        cartCount
      }}
    >
      {children}
      {notification && (
        <DynamicNotification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </CartContext.Provider>
  )
}
