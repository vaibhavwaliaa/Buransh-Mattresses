import React from 'react'
import { useTheme } from '../../context/ThemeContext'

const RightCardContent = ({ id, tag, intro }) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const scrollToSection2 = () => {
    const section2Element = document.getElementById('section2');
    if (section2Element) {
      section2Element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const primaryButtonClasses = `font-medium px-6 md:px-8 py-2 rounded-full text-base md:text-lg transition-colors duration-200 ${
    isDark ? 'bg-sky-500 hover:bg-sky-400 text-slate-900' : 'bg-blue-600 hover:bg-blue-500 text-white'
  }`

  return (
    <div className="absolute top-0 left-0 h-full w-full p-6 md:p-8 flex flex-col justify-between bg-gradient-to-t from-black/50 to-transparent">
      <h2
        className={`text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center border transition-colors duration-300 ${
          isDark
            ? 'bg-slate-900/80 text-slate-100 border-slate-700'
            : 'bg-white/95 text-slate-900 border-white/80 shadow'
        }`}
      >
        {id + 1}
      </h2>
      <div>
        <p
          className={`text-base md:text-lg mb-8 font-semibold leading-relaxed ${
            isDark ? 'text-slate-100' : 'text-black'
          }`}
        >
          {intro}
        </p>
        <div className="flex justify-between gap-3">
          <button onClick={scrollToSection2} className={primaryButtonClasses}>{tag}</button>
          <button
            className={`px-4 py-2 rounded-full text-lg transition-colors duration-200 ${
              isDark ? 'bg-slate-900/80 text-slate-100 hover:bg-slate-800' : 'bg-white/80 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
