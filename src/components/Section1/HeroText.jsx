import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const HeroText = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="p-4 md:p-6 transition-colors duration-300">
      <h3
        className={`mb-4 md:mb-7 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ${
          isDark ? 'text-slate-100' : 'text-slate-900'
        }`}
      >
        Why to <br />{' '}
        <span className={isDark ? 'text-slate-300' : 'text-gray-600'}>Invest in</span>
        <br />
        our segments
      </h3>
      <p
        className={`text-sm sm:text-base md:text-lg lg:text-xl w-full md:w-[90%] font-medium leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-gray-600'
        }`}
      >
        Investing in Buransh Mattresses means investing in your well-being. Experience
        unparalleled comfort, superior support, and deeper, restorative sleep every single night.
      </p>
    </div>
  )
}

export default HeroText
