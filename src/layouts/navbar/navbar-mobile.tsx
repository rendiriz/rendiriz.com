import Link from 'next/link'
import Image from 'next/image'
import tw from 'twin.macro'

import { ToggleTheme } from '@/components/toggle-theme'

import { CgMenuMotion } from 'react-icons/cg'

export function NavbarMobile() {
  return (
    <>
      <nav
        css={tw`lg:hidden h-32 max-w-screen-lg w-full px-5 m-auto overflow-hidden sm:px-12 md:px-20`}
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
                <CgMenuMotion size="20" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
