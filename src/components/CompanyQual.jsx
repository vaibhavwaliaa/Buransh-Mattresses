import React from 'react'

const CompanyQual = () => {
  const qualities = [
    "24X7 Support",
    "Value for Money",
    "Finest Quality",
    "Custom Size",
    "Fast Delivery",
    "100% Satisfaction Guaranteed"
  ]

  return (
    <div className="flex justify-center my-12 px-4">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
          {/* Ordered List Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
              <h2 className="text-3xl font-bold text-indigo-900 mb-6 font-serif text-center lg:text-left">
                Why Choose Buransh Mattress
              </h2>
              <ol className="space-y-4">
                {qualities.map((quality, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-indigo-50 transition-colors duration-200 border-l-4 border-indigo-600"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </span>
                    <span className="text-lg font-semibold text-gray-800 font-sans pt-1">
                      {quality}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 p-6 md:p-8">
              <img 
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070'
                alt="Quality mattress and customer service"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyQual

