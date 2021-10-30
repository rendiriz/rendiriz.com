import { useDarkMode } from '@/hooks/useDarkMode'
import tw from 'twin.macro'
import { FiSun, FiMoon } from 'react-icons/fi'

export const ToggleTheme = () => {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? <FiSun size="20" /> : <FiMoon size="20" />}
      </button>
    </>
  )
}
