import { useRef, useState } from 'react'
import Link from 'next/link'
import tw from 'twin.macro'
import { gsap } from 'gsap'

import useIsomorphicLayoutEffect from '@/effects/useIsomorphicLayoutEffect'
import { ToggleTheme } from '@/components/toggle-theme'
import { ToggleMenu } from '@/components/toggle-menu'

export function NavbarFixed() {
  const [tl, setTl] = useState(() => gsap)

  const logoAreaRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  let rect: any
  let position: any

  useIsomorphicLayoutEffect(() => {
    if (logoAreaRef.current !== null) {
      rect = logoAreaRef.current.getBoundingClientRect()
      position = {
        w: Math.round(rect.width * 0.5),
        h: Math.round(rect.height * 0.5),
      }
    }

    tl &&
      tl.set(logoRef.current, {
        xPercent: -50,
        yPercent: -50,
        x: position.w,
        y: position.h,
      })
  })

  const handleMouseMove = (e: any) => {
    tl &&
      tl.to(logoRef.current, {
        duration: 5,
        x: e.clientX,
        y: e.clientY,
        ease: 'Power4.easeOut',
        pointerEvents: 'auto',
      })
  }

  const handleMouseLeave = (e: any) => {
    tl &&
      tl.to(logoRef.current, {
        duration: 5,
        x: position.w,
        y: position.h,
        ease: 'Back.easeOut',
        pointerEvents: 'none',
      })
  }

  return (
    <>
      <div css={tw`hidden lg:block fixed w-full top-0 z-10`}>
        <div
          ref={logoAreaRef}
          css={tw`relative h-32 w-64 top-0 left-0 z-50`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={logoRef} css={tw`inline-flex`}>
            <Link href="/">
              <a
                css={tw`text-xl font-serif text-fore-primary tracking-wider cursor-pointer`}
              >
                RENDI <br /> RIZ
              </a>
            </Link>
          </div>
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
