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

  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
  }

  const handleHomeClick = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='flex items-center justify-between py-8 px-18 sticky top-0 backdrop-blur-md' style={{ zIndex: 1000 }}>
      <div className='px-6 py-2 flex items-center'>
        <img 
          src={mainLogo} 
          alt="Buransh Mattress Limited" 
          className='h-12 md:h-16 w-auto object-contain cursor-pointer'
          onClick={handleHomeClick}
          style={{ 
            backgroundColor: 'transparent',
            mixBlendMode: 'multiply',
            filter: 'contrast(1.1)'
          }}
        />
      </div>
      <div className='flex items-center'>
      <button onClick={handleHomeClick} className=' py-2 px-6   uppercase rounded-full tracking-widest hover:bg-sky-700'>Home</button>
      <button onClick={() => scrollToSection('section2')} className='py-2 px-6 uppercase rounded-full tracking-widest hover:bg-sky-700'>Mattress</button>
      <button className=' py-2 px-6 uppercase rounded-full tracking-widest hover:bg-sky-700'>Accessories</button>
      <button onClick={scrollToFooter} className=' py-2 px-6 uppercase rounded-full tracking-widest hover:bg-sky-700'>About Us</button>
      </div>
      <div className='flex items-center gap-4'>
        <button 
          onClick={() => setIsCartOpen(true)}
          className='relative py-2 px-4 hover:bg-gray-100 rounded-full transition-colors'
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {cartCount > 0 && (
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold'>
              {cartCount}
            </span>
          )}
        </button>
        <button onClick={scrollToFooter} className='bg-black py-2 px-6 uppercase rounded-full tracking-widest text-white text '>Contact Us</button>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}

export default Navbar
