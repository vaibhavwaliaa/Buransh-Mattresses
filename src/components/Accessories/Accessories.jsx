import React from 'react'
import { useNavigate } from 'react-router-dom'

const Accessories = () => {
  const navigate = useNavigate()

  const upcomingProducts = [
    {
      id: 1,
      name: 'Premium Pillows',
      description: 'Ergonomic pillows designed for ultimate comfort and support',
      icon: '🛏️'
    },
    {
      id: 2,
      name: 'Luxury Bedsheets',
      description: 'Soft, breathable bedsheets in various sizes and colors',
      icon: '🧵'
    },
    {
      id: 3,
      name: 'Cozy Blankets',
      description: 'Warm and comfortable blankets for all seasons',
      icon: '🧶'
    }
  ]

  const handleBackClick = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Coming Soon Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg">
            <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold text-sm uppercase tracking-wide">Coming Soon</span>
          </div>
        </div>

        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Premium Accessories
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 font-medium max-w-3xl mx-auto">
            Expanding our collection to bring you the complete comfort experience
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-indigo-500 to-indigo-500 rounded-full"></div>
            <div className="h-1 w-1 bg-indigo-500 rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent via-indigo-500 to-indigo-500 rounded-full"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {upcomingProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="text-6xl mb-4 text-center">
                {product.icon}
              </div>
              
              {/* Product Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                {product.name}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed">
                {product.description}
              </p>
              
              {/* Coming Soon Overlay */}
              <div className="absolute top-4 right-4">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full border border-yellow-300">
                  Launching Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Notify Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200 p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-5xl mb-6">🔔</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're working hard to bring you the finest quality pillows, bedsheets, and blankets. These premium accessories will be available soon to complete your comfort collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBackClick}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Our Mattresses
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </button>
            </div>
          </div>
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

export default Accessories
