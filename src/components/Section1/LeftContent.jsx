import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-full md:w-1/3 transition-colors duration-300">
      <HeroText />
      <Arrow />
    </div>
  )
}

export default LeftContent
