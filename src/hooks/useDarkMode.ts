import { useEffect } from 'react'
import { usePrefersLightMode } from './usePrefersLightMode'
import { useSafeLocalStorage } from './useSafeLocalStorage'

export function useDarkMode() {
  const [isEnabled, setIsEnabled] = useSafeLocalStorage('dark-mode', undefined)
  const prefersDarkMode = usePrefersLightMode()

  const enabled = isEnabled === undefined ? prefersDarkMode : isEnabled

  useEffect(() => {
    if (window === undefined) return
    const root = window.document.documentElement
    root.classList.remove(enabled ? 'light' : 'dark')
    root.classList.add(enabled ? 'dark' : 'light')
  }, [enabled])

  return [enabled, setIsEnabled]
}
