import React from 'react'

const Image = () => {
  const features = [
    {
      title: "Wide Selection",
      description: "Our mattress showroom in Haldwani boasts a wide selection of mattresses to suit every preference and budget. Whether you're looking for a firm mattress for optimal support or a plush option for luxurious comfort, we have it all."
    },
    {
      title: "Factory Prices",
      description: "Say goodbye to inflated retail prices! At Buransh Mattress, we cut out the middleman and sell directly to you from our factory, ensuring that you get the best value for your money. Our mattresses are priced affordably without sacrificing quality."
    },
    {
      title: "Customization Options",
      description: "We understand that every sleeper is unique. That's why we offer customization options to tailor your mattress to your specific needs. From extra lumbar support to cooling gel-infused memory foam, we can create the perfect mattress just for you."
    },
    {
      title: "Exceptional Service",
      description: "As one of the top mattress dealers in Haldwani, customer satisfaction is our top priority. Our knowledgeable staff are here to assist you every step of the way, from choosing the right mattress to delivery and setup."
    },
    {
      title: "Affordability Guaranteed",
      description: "Looking for the cheapest mattress shop in Haldwani? Look no further than Buransh Mattress. We offer the most affordable mattresses in town, making quality sleep accessible to everyone."
    }
  ]

  return (
    <div className="flex justify-center my-12 px-4">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 p-6 md:p-8">
              <img 
                src='https://plus.unsplash.com/premium_photo-1661595077028-9ff236368cb5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069'
                alt="Premium mattress"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Information Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 h-full">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="border-l-4 border-indigo-600 pl-4 py-2">
                    <h3 className="text-xl font-bold text-indigo-900 mb-2 font-serif">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-sans">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image
