import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import CartDrawer from '../Cart/CartDrawer'
import mainLogo from '../../assets/main-logo.webp'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { cartCount } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false)
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const handleHomeClick = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className='flex items-center justify-between py-4 px-4 md:py-6 md:px-8 lg:px-16 sticky top-0 backdrop-blur-md bg-white/80 shadow-sm' style={{ zIndex: 1000 }}>
        {/* Logo */}
        <div className='flex items-center'>
          <img 
            src={mainLogo} 
            alt="Buransh Mattress Limited" 
            className='h-10 md:h-14 lg:h-16 w-auto object-contain cursor-pointer'
            onClick={handleHomeClick}
            style={{ 
              backgroundColor: 'transparent',
              mixBlendMode: 'multiply',
              filter: 'contrast(1.1)'
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center space-x-2'>
          <button onClick={handleHomeClick} className='py-2 px-4 xl:px-6 uppercase rounded-full tracking-wide text-sm hover:bg-sky-100 hover:text-sky-700 transition-colors'>Home</button>
          <button onClick={() => scrollToSection('section2')} className='py-2 px-4 xl:px-6 uppercase rounded-full tracking-wide text-sm hover:bg-sky-100 hover:text-sky-700 transition-colors'>Mattress</button>
          <button className='py-2 px-4 xl:px-6 uppercase rounded-full tracking-wide text-sm hover:bg-sky-100 hover:text-sky-700 transition-colors'>Accessories</button>
          <button onClick={scrollToFooter} className='py-2 px-4 xl:px-6 uppercase rounded-full tracking-wide text-sm hover:bg-sky-100 hover:text-sky-700 transition-colors'>About Us</button>
        </div>

        {/* Right side actions */}
        <div className='flex items-center gap-2 md:gap-3'>
          {/* Cart Button */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className='relative p-2 hover:bg-gray-100 rounded-full transition-colors'
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold'>
                {cartCount}
              </span>
            )}
          </button>

          {/* Contact Button - Desktop */}
          <button onClick={scrollToFooter} className='hidden md:block bg-black py-2 px-4 lg:px-6 uppercase rounded-full tracking-wide text-white text-xs lg:text-sm hover:bg-gray-800 transition-colors'>Contact Us</button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors'
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='lg:hidden fixed inset-0 bg-black/50 z-[999]' onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className='absolute right-0 top-0 h-full w-64 bg-white shadow-2xl p-6 transform transition-transform duration-300 ease-in-out'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex justify-end mb-8'>
              <button onClick={() => setIsMobileMenuOpen(false)} className='p-2 hover:bg-gray-100 rounded-lg'>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className='flex flex-col space-y-4'>
              <button onClick={handleHomeClick} className='text-left py-3 px-4 uppercase font-semibold text-gray-700 hover:bg-sky-50 hover:text-sky-700 rounded-lg transition-colors'>Home</button>
              <button onClick={() => scrollToSection('section2')} className='text-left py-3 px-4 uppercase font-semibold text-gray-700 hover:bg-sky-50 hover:text-sky-700 rounded-lg transition-colors'>Mattress</button>
              <button className='text-left py-3 px-4 uppercase font-semibold text-gray-700 hover:bg-sky-50 hover:text-sky-700 rounded-lg transition-colors'>Accessories</button>
              <button onClick={scrollToFooter} className='text-left py-3 px-4 uppercase font-semibold text-gray-700 hover:bg-sky-50 hover:text-sky-700 rounded-lg transition-colors'>About Us</button>
              <button onClick={scrollToFooter} className='bg-black py-3 px-4 uppercase rounded-lg text-white font-semibold hover:bg-gray-800 transition-colors text-center mt-4'>Contact Us</button>
            </div>
          </div>
        </div>
      )}

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

export default Navbar
