import Link from 'next/link'
import tw from 'twin.macro'

import { ToggleTheme } from '@/components/toggle-theme'
import { ToggleMenu } from '@/components/toggle-menu'

export function NavbarMobile() {
  return (
    <>
      <nav
        css={tw`fixed lg:hidden h-32 max-w-screen-lg w-full px-8 m-auto overflow-hidden z-10 sm:px-12 md:px-20`}
      >
        <div css={tw`flex h-full items-center justify-start`}>
          <Link href="/">
            <a
              css={tw`flex flex-grow text-xl font-serif tracking-wider cursor-pointer`}
            >
              RENDI <br /> RIZ
            </a>
          </Link>
          <div>
            <ul css={tw`flex`}>
              <li css={tw`mr-4 lg:mr-8`}>
                <ToggleTheme />
              </li>
              <li>
                <ToggleMenu />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
