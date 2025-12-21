import React from 'react'

const MattressCard = ({ name, image, description, onButtonClick }) => {
  return (
    <div className="flex-shrink:0 w-72 md:w-80 h-96 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
      {/* Image Container - Space for adding image */}
      <div className="w-full h-48 bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-fill"
          />
        ) : (
          <div className="text-gray-400 text-sm text-center px-4">
            <svg 
              className="w-16 h-16 mx-auto mb-2 text-gray-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <p>Image Placeholder</p>
            <p className="text-xs mt-1">Add image here</p>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-sm text-gray-600 leading-relaxed font-medium tracking-wide">{description}</p>
        </div>
        
        {/* Button */}
        <button
          onClick={onButtonClick}
          className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          View Details
        </button>
      </div>
    </div>
  )
}

export default MattressCard

