import { useEffect, useState } from 'react'

export function usePrefersLightMode() {
  const [value, setValue] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    setValue(mediaQuery.matches)

    const handler = () => setValue(mediaQuery.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return value
}
