import React from 'react'
import { useNavigate } from 'react-router-dom'
import MattressCard from '../Section2/MattressCard'
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

const AllMattresses = () => {
  const navigate = useNavigate()

  const handleCardClick = (productName) => {
    const urlName = productName.toLowerCase().replace(/\s+/g, '-')
    navigate(`/product/${urlName}`)
  }

  const handleBackClick = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackClick}
              className="group flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-all duration-300 hover:gap-3"
            >
              <div className="p-2 rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <span className="hidden sm:inline">Back to Home</span>
            </button>
            
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">{mattressProducts.length} Products</span>
              </div>
            </div>
          </div>
          
          {/* Title Section */}
          <div className="mt-6 mb-2 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Our Premium Mattress Collection
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Discover the perfect mattress for your comfort needs. Each design crafted for exceptional sleep quality.
            </p>
          </div>
        </div>
      </div>

      {/* Mattresses Grid */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
          {mattressProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="flex justify-center animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
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

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

export default AllMattresses
