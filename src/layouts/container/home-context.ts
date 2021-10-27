import { createContext } from 'react'

interface HomeContextInterface {
  menu: boolean
  toggleMenu: () => void
}

export const HomeContext = createContext<HomeContextInterface>({
  menu: false,
  toggleMenu: () => {},
})
