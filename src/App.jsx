import React, { useEffect, useMemo, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeContext } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Checkout from './components/Checkout/Checkout'
import FloatingQueryButton from './components/FloatingQueryButton'

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return window.localStorage.getItem('theme') ?? 'light'
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme
    }),
    [theme]
  )

  const isDark = theme === 'dark'

  return (
    <ThemeContext.Provider value={contextValue}>
      <CartProvider>
        <div
          className={`min-h-screen transition-colors duration-300 ${
            isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productName" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <FloatingQueryButton />
        </div>
      </CartProvider>
    </ThemeContext.Provider>
  )
}

export default App
