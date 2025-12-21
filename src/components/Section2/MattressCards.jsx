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

  return (
    <div className="w-full py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Cards Container with Edge Blur Effect */}
        <div className="relative">
          {/* Left Blur Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Right Blur Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Cards Container - Horizontal Scrolling */}
          <div className="flex overflow-x-auto gap-6 pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide px-2 md:px-0">
            {mattressProducts.map((product) => (
              <div key={product.id} className="snap-center flex-shrink:0">
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

