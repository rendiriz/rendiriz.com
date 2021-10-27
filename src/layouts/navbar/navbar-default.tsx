import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import tw from 'twin.macro'

import { NavbarLink } from '@/layouts/navbar/navbar-link'
import { ToggleTheme } from '@/components/toggle-theme'

import avatar from '../../../public/images/the-avatar.png'

const routes = [
  {
    path: '/',
    label: 'HOME',
    exact: true,
  },
  {
    path: '/blog',
    label: 'BLOG',
  },
  {
    path: '/projects',
    label: 'PROJECTS',
  },
  {
    path: '/about',
    label: 'ABOUT',
  },
]

export function NavbarDefault() {
  const router = useRouter()

  return (
    <nav
      css={tw`h-32 max-w-screen-lg w-full px-5 m-auto overflow-hidden sm:px-12 md:px-20`}
    >
      <div
        css={tw`flex items-center justify-start h-full mt-auto space-x-6 text-sm md:justify-start`}
      >
        <Link href="/">
          <a
            aria-label="Website logo, go back to homepage."
            css={tw`flex items-center border-white cursor-pointer`}
            className="group"
          >
            <div
              css={tw`overflow-hidden transition-transform ease-in-out border-2 rounded-full w-8 h-8 group-hover:-translate-y-1`}
            >
              <Image
                src={avatar}
                alt="My avatar"
                width={32}
                height={32}
                priority={true}
              />
            </div>
            <div css={tw`inline ml-3 text-base font-semibold sm:hidden`}>
              <span css={tw`group-hover:text-primary text-fore-primary`}>
                rendiriz
              </span>
              <span css={tw`text-primary`}>.com</span>
            </div>
          </a>
        </Link>
        <div css={tw`items-center flex-grow hidden space-x-6 sm:flex`}>
          {routes.map(route => (
            <NavbarLink
              key={route.path}
              to={route.path}
              title={route.label}
              selected={
                route.exact === true
                  ? route.path === router.asPath
                  : router.asPath.startsWith(route.path)
              }
            />
          ))}
        </div>
        <ToggleTheme />
      </div>
    </nav>
  )
}
