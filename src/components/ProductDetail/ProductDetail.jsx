import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import Navbar from '../Section1/Navbar'
import Footer from '../Footer'
import OrthoImage from '../../assets/Ortho.jpg'
import BuranshSoftImage from '../../assets/buransh soft.png'
import OrthomedcPlusImage from '../../assets/buransh orthomedic plus.png'
import BuranshSoftPlusImage from '../../assets/buransh soft plus.png'
import VedicBuranshImage from '../../assets/vedic buransh.png'
import MedicBuranshImage from '../../assets/Medic buransh.png'
import VedicBuranshPlusImage from '../../assets/Vedic buransh plus.png'
import MedicBuranshPlusETImage from '../../assets/Medic buransh plus ET.png'

const ProductDetail = () => {
  const { productName } = useParams()
  const navigate = useNavigate()
  const { addToCart, addToCompare } = useCart()
  const [selectedSize, setSelectedSize] = useState('72" x 30" (Single stnd)')
  const [selectedThickness, setSelectedThickness] = useState('15 cm (6")')
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Calculate price based on selected size
  const calculatePrice = (basePrice, size) => {
    const sizePriceMap = {
      '72" x 30" (Single stnd)': 0,     // Base price
      '72" x 36" (Single)': 1500,       // +1500
      '72" x 48" (Double)': 3000,       // +3000
      '72" x 60" (Queen)': 4500,        // +4500
      '78" x 72" (King)': 6000          // +6000
    }
    return basePrice + (sizePriceMap[size] || 0)
  }

  // Product data
  const productData = {
    'orthomedic': {
      name: 'Orthomedic',
      fullName: 'Orthomedic Mattress',
      description: 'Firm orthopedic support for healthy spinal alignment',
      price: 5981.00,
      originalPrice: 8544.00,
      discount: '30% off',
      images: [OrthoImage],
      features: [
        'Orthopedic support for spine alignment',
        'Firm comfort level',
        'Durable construction',
        'Premium quality materials'
      ],
      detailedFeatures: [
        { title: 'Firm orthopedic feel', icon: 'firm' },
        { title: 'Spinal alignment support', icon: 'support' },
        { title: 'Enhanced breathability', icon: 'breathability' },
        { title: 'High-density foam core', icon: 'circulation' },
        { title: 'Durable edge support', icon: 'foam' },
        { title: 'Anti-skid base', icon: 'skid' }
      ]
    },
    'buransh-soft': {
      name: 'Buransh Soft',
      fullName: 'Buransh Soft Mattress',
      description: 'Plush comfort with gentle pressure-relief feel',
      price: 6200.00,
      originalPrice: 8857.00,
      discount: '30% off',
      images: [BuranshSoftImage],
      features: [
        'Soft and plush comfort',
        'Pressure relief technology',
        'Premium foam layers',
        'Breathable fabric'
      ],
      detailedFeatures: [
        { title: 'Soft plush feel', icon: 'firm' },
        { title: 'Pressure relief comfort', icon: 'support' },
        { title: 'Superior breathability', icon: 'breathability' },
        { title: 'Memory foam layer', icon: 'circulation' },
        { title: 'Temperature regulation', icon: 'foam' },
        { title: 'Anti-microbial fabric', icon: 'skid' }
      ]
    },
    'orthomedic-plus': {
      name: 'Orthomedic Plus',
      fullName: 'Orthomedic Plus Mattress',
      description: 'Enhanced orthopedic support with extra comfort layers',
      price: 7500.00,
      originalPrice: 10714.00,
      discount: '30% off',
      images: [OrthomedcPlusImage],
      features: [
        'Enhanced orthopedic support',
        'Extra comfort layers',
        'Advanced pressure relief',
        'Premium quality construction'
      ],
      detailedFeatures: [
        { title: 'Medium firm feel', icon: 'firm' },
        { title: 'Enhanced body support', icon: 'support' },
        { title: 'Healthy breathability', icon: 'breathability' },
        { title: 'Enhanced air circulation', icon: 'circulation' },
        { title: 'Cool gel infused foam', icon: 'foam' },
        { title: 'Anti-skid', icon: 'skid' }
      ]
    },
    'buransh-soft-plus': {
      name: 'Buransh Soft Plus',
      fullName: 'Buransh Soft Plus Mattress',
      description: 'Extra-soft luxury comfort for deep restful sleep',
      price: 7800.00,
      originalPrice: 11142.00,
      discount: '30% off',
      images: [BuranshSoftPlusImage],
      features: [
        'Extra-soft luxury comfort',
        'Multiple comfort layers',
        'Deep restful sleep',
        'Premium materials'
      ],
      detailedFeatures: [
        { title: 'Extra soft luxury feel', icon: 'firm' },
        { title: 'Multi-layer support', icon: 'support' },
        { title: 'Advanced breathability', icon: 'breathability' },
        { title: 'Contour memory foam', icon: 'circulation' },
        { title: 'Cooling gel technology', icon: 'foam' },
        { title: 'Motion isolation', icon: 'skid' }
      ]
    },
    'vedic-buransh': {
      name: 'Vedic Buransh',
      fullName: 'Vedic Buransh Mattress',
      description: 'Natural comfort inspired by traditional wellness principles',
      price: 8500.00,
      originalPrice: 12142.00,
      discount: '30% off',
      images: [VedicBuranshImage],
      features: [
        'Natural materials',
        'Traditional wellness principles',
        'Eco-friendly construction',
        'Breathable comfort'
      ],
      detailedFeatures: [
        { title: 'Natural medium feel', icon: 'firm' },
        { title: 'Organic support system', icon: 'support' },
        { title: 'Natural breathability', icon: 'breathability' },
        { title: 'Eco-friendly air flow', icon: 'circulation' },
        { title: 'Natural latex layer', icon: 'foam' },
        { title: 'Organic cotton cover', icon: 'skid' }
      ]
    },
    'medic-buransh': {
      name: 'Medic Buransh',
      fullName: 'Medic Buransh Mattress',
      description: 'Therapeutic comfort designed for everyday body recovery',
      price: 9200.00,
      originalPrice: 13142.00,
      discount: '30% off',
      images: [MedicBuranshImage],
      features: [
        'Therapeutic comfort',
        'Body recovery support',
        'Medical-grade materials',
        'Pain relief technology'
      ],
      detailedFeatures: [
        { title: 'Therapeutic firm feel', icon: 'firm' },
        { title: 'Medical-grade support', icon: 'support' },
        { title: 'Hypoallergenic breathability', icon: 'breathability' },
        { title: 'Therapeutic air channels', icon: 'circulation' },
        { title: 'Pain relief foam', icon: 'foam' },
        { title: 'Pressure point relief', icon: 'skid' }
      ]
    },
    'vedic-buransh-plus': {
      name: 'Vedic Buransh Plus',
      fullName: 'Vedic Buransh Plus Mattress',
      description: 'Premium natural comfort with advanced support balance',
      price: 10500.00,
      originalPrice: 15000.00,
      discount: '30% off',
      images: [VedicBuranshPlusImage],
      features: [
        'Premium natural materials',
        'Advanced support balance',
        'Enhanced durability',
        'Luxury comfort'
      ],
      detailedFeatures: [
        { title: 'Premium natural feel', icon: 'firm' },
        { title: 'Balanced body support', icon: 'support' },
        { title: 'Enhanced natural airflow', icon: 'breathability' },
        { title: 'Multi-zone circulation', icon: 'circulation' },
        { title: 'Natural latex plus', icon: 'foam' },
        { title: 'Sustainable materials', icon: 'skid' }
      ]
    },
    'medic-buransh-plus-et': {
      name: 'Medic Buransh Plus ET',
      fullName: 'Medic Buransh Plus ET Mattress',
      description: 'Advanced medical-grade comfort with extended therapy',
      price: 12000.00,
      originalPrice: 17142.00,
      discount: '30% off',
      images: [MedicBuranshPlusETImage],
      features: [
        'Advanced medical-grade comfort',
        'Extended therapy features',
        'Maximum support',
        'Premium therapeutic design'
      ],
      detailedFeatures: [
        { title: 'Medical firm support', icon: 'firm' },
        { title: 'Extended therapy support', icon: 'support' },
        { title: 'Clinical breathability', icon: 'breathability' },
        { title: 'Therapeutic circulation', icon: 'circulation' },
        { title: 'Advanced therapy foam', icon: 'foam' },
        { title: 'Medical-grade cover', icon: 'skid' }
      ]
    }
  }

  const product = productData[productName] || productData['orthomedic']

  // Get current price based on selected size
  const currentPrice = calculatePrice(product.price, selectedSize)
  const currentOriginalPrice = calculatePrice(product.originalPrice, selectedSize)

  const sizes = [
    '72" x 30" (Single stnd)',
    '72" x 36" (Single)',
    '72" x 48" (Double)',
    '72" x 60" (Queen)',
    '78" x 72" (King)'
  ]

  const thicknesses = [
    '15 cm (6")',
    '20 cm (8")',
    '25 cm (10")'
  ]

  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer')
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <button onClick={() => navigate('/')} className="hover:text-blue-600">HOME</button>
          <span>›</span>
          <span className="uppercase">MATTRESS</span>
          <span>›</span>
          <span className="uppercase text-gray-900">{product.fullName}</span>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Image Gallery */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`border-2 rounded-lg overflow-hidden ${
                      currentImageIndex === idx ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-24 h-24 object-cover" />
                  </button>
                ))}
              </div>
            )}
            <p className="text-sm text-gray-500 mt-4">
              The colour of the actual product may vary from the images shown here.
            </p>
          </div>

          {/* Right - Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.fullName}</h1>
            
            {/* Price */}
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-3xl font-bold text-gray-900">₹{currentPrice.toFixed(2)}</span>
              <span className="text-xl text-gray-400 line-through">₹{currentOriginalPrice.toFixed(2)}</span>
            </div>
            <div className="mb-6">
              <span className="text-blue-600 font-semibold">{product.discount} – (Inc. of all taxes)</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">* Price varies based on selected size</p>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="font-semibold text-gray-900">Size</label>
                <button className="text-blue-600 text-sm">Size guide ⊕</button>
              </div>
              <select 
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            {/* Thickness Selector */}
            <div className="mb-6">
              <label className="font-semibold text-gray-900 block mb-3">Thickness</label>
              <select 
                value={selectedThickness}
                onChange={(e) => setSelectedThickness(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {thicknesses.map((thickness) => (
                  <option key={thickness} value={thickness}>{thickness}</option>
                ))}
              </select>
            </div>

            {/* Final Size Display */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm font-semibold text-gray-700 mb-1">Final size selected</p>
              <p className="text-gray-900">72" x 30" x 6" | 182.9 cm x 76.2 cm x 15.0 cm</p>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="font-semibold text-gray-900 block mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  −
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-4">
              <button 
                onClick={() => {
                  addToCart({ 
                    id: productName, 
                    ...product,
                    price: currentPrice,
                    originalPrice: currentOriginalPrice,
                    image: product.images[0],
                    selectedSize: selectedSize,
                    selectedThickness: selectedThickness
                  })
                }}
                className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                ADD TO CART
              </button>
              <button 
                onClick={() => {
                  const productData = { 
                    id: productName, 
                    ...product,
                    price: currentPrice,
                    originalPrice: currentOriginalPrice,
                    image: product.images[0],
                    quantity: 1,
                    selectedSize: selectedSize,
                    selectedThickness: selectedThickness
                  }
                  navigate('/checkout', {
                    state: {
                      items: [productData],
                      total: currentPrice,
                      isBuyNow: true
                    }
                  })
                }}
                className="flex-1 bg-gray-900 text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                BUY NOW
              </button>
            </div>

            {/* Compare Button */}
            <button 
              onClick={() => {
                addToCompare({ 
                  id: productName, 
                  ...product,
                  price: currentPrice,
                  originalPrice: currentOriginalPrice,
                  image: product.images[0]
                })
              }}
              className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors mb-4"
            >
              Add to Compare
            </button>

            {/* Contact Button */}
            <button 
              onClick={scrollToFooter}
              className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors mb-6"
            >
              Check for the delivery details
            </button>

            {/* Features */}
            <div className="border-t pt-6">
              <h3 className="font-bold text-lg mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div className="border-t pt-6 mt-6">
              <h3 className="font-bold text-lg mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {product.detailedFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon === 'firm' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                    {feature.icon === 'support' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    )}
                    {feature.icon === 'breathability' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    )}
                    {feature.icon === 'circulation' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    )}
                    {feature.icon === 'foam' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    )}
                    {feature.icon === 'skid' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* What Goes Inside Section */}
          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What goes inside</h2>
            <div className="flex items-center gap-4 mb-8 bg-green-50 p-4 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow">
                  <span className="text-green-600 font-bold text-sm">neem</span>
                  <span className="text-gray-700 text-xs">fresche</span>
                </div>
              </div>
              <p className="text-gray-700">
                Is an anti-microbial technology integrated in all our products to protect you from dust mites, allergies and breathing disorders.
              </p>
            </div>

            {/* Mattress Layers Diagram */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&auto=format&fit=crop" 
                  alt="Mattress Layers"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Premium knitted fabric</h4>
                    <p className="text-sm text-gray-600">
                      Known for its smooth texture and high strength, knitted fabric adds to the plush feel, is tear resistant and easy to maintain.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Profiled Impression & Sleepwell Quiltec® quilting</h4>
                    <p className="text-sm text-gray-600">
                      The use of Sleepwell ingenious profiled Impressions and Quiltec® foam together in quilting offers a luxurious cushy surface for plush comfort.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">High-density foam layers</h4>
                    <p className="text-sm text-gray-600">
                      Multiple layers of premium foam provide optimal support and comfort for a restful sleep experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Support base layer</h4>
                    <p className="text-sm text-gray-600">
                      The foundation layer ensures durability and provides the necessary support for proper spinal alignment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductDetail
