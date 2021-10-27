import { useDarkMode } from '@/hooks/useDarkMode'
import tw from 'twin.macro'
import { CgSun, CgMoon } from 'react-icons/cg'

export const ToggleTheme = () => {
  const [isDark, setIsDark] = useDarkMode()

  // css={tw`hidden transition-transform ease-in-out focus:outline-none sm:block hover:text-primary hover:-translate-y-1`}

  return (
    <>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? <CgSun size="20" /> : <CgMoon size="20" />}
      </button>
    </>
  )
}
