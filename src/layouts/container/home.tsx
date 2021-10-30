import { Fragment, useState, useRef } from 'react'
import tw from 'twin.macro'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import useIsomorphicLayoutEffect from '@/effects/useIsomorphicLayoutEffect'
import { NavbarFixed } from '@/layouts/navbar/navbar-fixed'
import { NavbarMobile } from '@/layouts/navbar/navbar-mobile'
import { MenuDefault } from '@/layouts/menu/menu-default'

import { HomeContext } from './home-context'

gsap.registerPlugin(ScrollTrigger)

export function Home({ children }: any) {
  const mainRef = useRef<HTMLDivElement>(null)
  const [menu, setMenu] = useState<boolean | null>(null)
  const [tl, setTl] = useState(() => gsap.timeline())

  const toggleMenu = () => {
    setMenu(null || !menu ? true : false)
  }

  useIsomorphicLayoutEffect(() => {
    let scroll
    import('locomotive-scroll').then(locomotiveModule => {
      scroll = new locomotiveModule.default({
        el: document.querySelector('[data-scroll-section]'),
        smooth: true,
      })
    })
  })

  return (
    <Fragment>
      <HomeContext.Provider value={{ menu, toggleMenu }}>
        <NavbarFixed />
        <MenuDefault />
        <div data-scroll-container>
          <div css={tw`flex flex-col min-h-screen`}>
            <NavbarMobile />
            <div ref={mainRef}>
              <main
                data-scroll-section
                css={tw`w-full flex-grow max-w-screen-lg px-8 pt-40 mx-auto sm:px-12 md:px-20`}
              >
                <div
                  css={tw`fixed lg:hidden h-32 top-0 left-0 w-full bg-back-primary z-8`}
                ></div>
                <div>{children}</div>
              </main>
              <footer data-scroll-section>Footer</footer>
            </div>
          </div>
        </div>
      </HomeContext.Provider>
    </Fragment>
  )
}
