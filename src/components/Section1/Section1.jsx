import React from 'react'
import Page1Content from './Page1Content'
import { useTheme } from '../../context/ThemeContext'

const Section1 = ({ users }) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      className={`h-screen w-full transition-colors duration-300 ${
        isDark ? 'bg-slate-950/95' : 'bg-white'
      }`}
    >
      <Page1Content users={users} />
    </section>
  )
}

export default Section1
