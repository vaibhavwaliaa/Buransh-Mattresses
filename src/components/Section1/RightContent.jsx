
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'
import { useTheme } from '../../context/ThemeContext'

const RightContent = ({ users }) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div
      id="right"
      className={`h-full flex flex-nowrap rounded-4xl overflow-x-auto gap-6 md:gap-10 w-full md:w-2/3 p-4 md:p-6 transition-colors duration-300 ${
        isDark ? 'bg-slate-900/40' : 'bg-white/70'
      }`}
    >
      {users.map((elem, idx) => (
        <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} />
      ))}
    </div>
  )
}

export default RightContent
