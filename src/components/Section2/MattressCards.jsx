import React from 'react'
import { useNavigate } from 'react-router-dom'
import MattressCard from './MattressCard'
import OrthoImage from '../../assets/Ortho.jpg'
import BuranshSoftImage from '../../assets/buransh soft.png'
import OrthomedcPlusImage from '../../assets/buransh orthomedic plus.png'
import BuranshSoftPlusImage from '../../assets/buransh soft plus.png'
import VedicBuranshImage from '../../assets/vedic buransh.png'
import MedicBuranshImage from '../../assets/Medic buransh.png'
import VedicBuranshPlusImage from '../../assets/Vedic buransh plus.png'
import MedicBuranshPlusETImage from '../../assets/Medic buransh plus ET.png'

const mattressProducts = [
  { id: 1, name: 'Orthomedic', image: OrthoImage, description: 'Firm orthopedic support for healthy spinal alignment' },
  { id: 2, name: 'Buransh Soft', image: BuranshSoftImage, description: 'Plush comfort with gentle pressure-relief feel' },
  { id: 3, name: 'Orthomedic Plus', image: OrthomedcPlusImage, description: 'Enhanced orthopedic support with extra comfort layers' },
  { id: 4, name: 'Buransh Soft Plus', image: BuranshSoftPlusImage, description: 'Extra-soft luxury comfort for deep restful sleep' },
  { id: 5, name: 'Vedic Buransh', image: VedicBuranshImage, description: 'Natural comfort inspired by traditional wellness principles' },
  { id: 6, name: 'Medic Buransh', image: MedicBuranshImage, description: 'Therapeutic comfort designed for everyday body recovery' },
  { id: 7, name: 'Vedic Buransh Plus', image: VedicBuranshPlusImage, description: 'Premium natural comfort with advanced support balance' },
  { id: 8, name: 'Medic Buransh Plus ET', image: MedicBuranshPlusETImage, description: 'Advanced medical-grade comfort with extended therapy' },
]

const MattressCards = () => {
  const navigate = useNavigate()

  const handleCardClick = (productName) => {
    // Convert product name to URL-friendly format
    const urlName = productName.toLowerCase().replace(/\s+/g, '-')
    navigate(`/product/${urlName}`)
  }

  const handleViewAllClick = () => {
    navigate('/mattresses')
  }

  return (
    <div className="w-full py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Single Card with View More Button (below md breakpoint) */}
        <div className="md:hidden">
          {/* Show only first mattress */}
          <div className="flex justify-center mb-8 px-4">
            <MattressCard
              name={mattressProducts[0].name}
              image={mattressProducts[0].image}
              description={mattressProducts[0].description}
              onButtonClick={() => handleCardClick(mattressProducts[0].name)}
            />
          </div>
          
          {/* View More Button - Enhanced Design */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-gray-600 text-sm font-medium">
              Explore {mattressProducts.length - 1} more premium mattresses
            </p>
            <button
              onClick={handleViewAllClick}
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-base font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button Content */}
              <div className="relative flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>View All Mattresses</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll for Desktop (md and above) */}
        <div className="hidden md:block relative">
          {/* Left Blur Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Right Blur Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Cards Container - Horizontal Scrolling */}
          <div className="flex overflow-x-auto gap-6 pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide">
            {mattressProducts.map((product) => (
              <div key={product.id} className="snap-center flex-shrink-0">
                <MattressCard
                  name={product.name}
                  image={product.image}
                  description={product.description}
                  onButtonClick={() => handleCardClick(product.name)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS to hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default MattressCards

