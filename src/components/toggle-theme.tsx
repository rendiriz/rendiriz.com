import { useDarkMode } from '@/hooks/useDarkMode'
import tw from 'twin.macro'
import { FiSun, FiMoon } from 'react-icons/fi'

export const ToggleTheme = () => {
  const [isDark, setIsDark] = useDarkMode()

  // css={tw`hidden transition-transform ease-in-out focus:outline-none sm:block hover:text-primary hover:-translate-y-1`}

  return (
    <>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? <FiSun size="20" /> : <FiMoon size="20" />}
      </button>
    </>
  )
}
