
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'
import { useTheme } from '../../context/ThemeContext'

const RightContent = ({ users }) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div
      id="right"
      className={`h-[50vh] md:h-full flex flex-nowrap rounded-2xl md:rounded-4xl overflow-x-auto gap-4 md:gap-6 lg:gap-10 w-full lg:w-2/3 p-3 md:p-4 lg:p-6 transition-colors duration-300 ${
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
