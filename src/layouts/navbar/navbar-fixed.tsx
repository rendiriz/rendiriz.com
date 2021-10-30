import Link from 'next/link'
import tw from 'twin.macro'

import { ToggleTheme } from '@/components/toggle-theme'
import { ToggleMenu } from '@/components/toggle-menu'

export function NavbarFixed() {
  return (
    <>
      <div css={tw`hidden lg:block fixed w-full top-0 z-10`}>
        <div
          css={tw`flex fixed h-32 w-64 top-0 left-0 items-center justify-center z-50`}
        >
          <Link href="/">
            <a
              css={tw`text-xl font-serif text-fore-primary tracking-wider cursor-pointer`}
            >
              RENDI <br /> RIZ
            </a>
          </Link>
        </div>
      </div>
      <div css={tw`hidden lg:block fixed w-full top-0 z-10`}>
        <div
          css={tw`flex fixed h-32 w-64 top-0 right-0 items-center justify-center z-50`}
        >
          <ul css={tw`flex`}>
            <li css={tw`mr-8`}>
              <ToggleTheme />
            </li>
            <li>
              <ToggleMenu />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
