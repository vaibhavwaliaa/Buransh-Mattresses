import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = ({ users }) => {
  return (
    <div className="pb-8 md:pb-16 pt-4 md:pt-6 flex flex-col lg:flex-row gap-6 md:gap-10 items-center min-h-[80vh] md:h-auto lg:h-[90vh] px-4 md:px-8 lg:px-16 transition-colors duration-300">
      <LeftContent />
      <RightContent users={users} />
    </div>
  )
}

export default Page1Content
