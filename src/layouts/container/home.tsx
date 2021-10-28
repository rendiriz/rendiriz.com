import { Fragment, useState } from 'react'
import tw from 'twin.macro'

import { NavbarFixed } from '@/layouts/navbar/navbar-fixed'
import { NavbarMobile } from '@/layouts/navbar/navbar-mobile'
import { MenuDefault } from '@/layouts/menu/menu-default'

import { HomeContext } from './home-context'

export function Home({ children }: any) {
  const [menu, setMenu] = useState<boolean | null>(null)

  const toggleMenu = () => {
    setMenu(null || !menu ? true : false)
  }

  return (
    <Fragment>
      <HomeContext.Provider value={{ menu, toggleMenu }}>
        <NavbarFixed />
        <div css={tw`flex flex-col min-h-screen`}>
          <NavbarMobile />
          <MenuDefault />
          <main
            css={tw`w-full flex-grow max-w-screen-lg px-8 pt-40 mx-auto sm:px-12 md:px-20`}
          >
            <div
              css={tw`fixed lg:hidden h-32 top-0 left-0 w-full bg-back-primary z-8`}
            ></div>
            {children}
          </main>
          <footer>Footer</footer>
        </div>
      </HomeContext.Provider>
    </Fragment>
  )
}
