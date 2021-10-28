import { createContext } from 'react'

interface HomeContextInterface {
  menu: boolean | null
  toggleMenu: () => void
}

export const HomeContext = createContext<HomeContextInterface>({
  menu: null,
  toggleMenu: () => {},
})
