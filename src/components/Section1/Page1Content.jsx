import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = ({ users }) => {
  return (
    <div className="pb-16 pt-6 flex flex-col md:flex-row gap-10 items-center h-auto md:h-[90vh] px-6 md:px-16 transition-colors duration-300">
      <LeftContent />
      <RightContent users={users} />
    </div>
  )
}

export default Page1Content
