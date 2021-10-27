import { Fragment, useState } from 'react'
import tw from 'twin.macro'

import { NavbarFixed } from '@/layouts/navbar/navbar-fixed'
import { NavbarMobile } from '@/layouts/navbar/navbar-mobile'
import { MenuDefault } from '@/layouts/menu/menu-default'

import { HomeContext } from './home-context'

export function Home({ children }: any) {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <Fragment>
      <HomeContext.Provider value={{ menu, toggleMenu }}>
        <NavbarFixed />
        <div css={tw`flex flex-col min-h-screen`}>
          <NavbarMobile />
          <MenuDefault />
          <main
            css={tw`w-full flex-grow max-w-screen-lg px-5 mx-auto sm:px-12 md:px-20`}
          >
            {children}
          </main>
          <footer>Footer</footer>
        </div>
      </HomeContext.Provider>
    </Fragment>
  )
}
