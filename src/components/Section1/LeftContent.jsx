import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className="min-h-[40vh] md:h-full flex flex-col justify-between w-full lg:w-1/3 transition-colors duration-300">
      <HeroText />
      <div className='hidden md:block'>
        <Arrow />
      </div>
    </div>
  )
}

export default LeftContent
