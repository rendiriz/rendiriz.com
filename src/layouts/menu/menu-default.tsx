import { useContext, useRef, useState } from 'react'
import tw from 'twin.macro'
import { gsap } from 'gsap'

import { HomeContext } from '@/layouts/container/home-context'
import useIsomorphicLayoutEffect from '@/effects/useIsomorphicLayoutEffect'

export function MenuDefault() {
  const { menu } = useContext(HomeContext)
  const [tl, setTl] = useState(() => gsap.timeline({ paused: true }))

  const mainRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    tl &&
      tl
        .addLabel('myLabel', 0)
        .to(
          mainRef.current,
          {
            duration: 0.1,
            opacity: 1,
          },
          0
        )
        .to(
          backgroundRef.current,
          {
            duration: 0.5,
            width: '100%',
          },
          '+=0.25'
        )
        .to(
          contentRef.current,
          {
            duration: 0.1,
            opacity: 1,
          },
          0
        )

    if (menu !== null) {
      if (menu) {
        tl && tl.play()
      } else {
        tl && tl.reverse()
      }
    }
  })

  return (
    <>
      <div
        ref={mainRef}
        css={[
          tw`w-full h-full fixed top-0 left-0 z-9 overflow-hidden opacity-0`,
        ]}
      >
        <div
          ref={backgroundRef}
          css={[tw`absolute h-full w-0 top-0 right-0 bg-secondary`]}
        ></div>
        <div css={tw`w-full h-full absolute left-0 top-0`}>
          <div css={tw`flex min-h-screen items-end lg:items-center`}>
            <div
              ref={contentRef}
              css={tw`w-full flex-grow max-w-screen-lg px-8 py-10 mx-auto sm:px-12 sm:py-20 md:px-20 opacity-0`}
            >
              <div css={tw`mb-12`}>
                <ul>
                  <li css={tw`my-4`}>
                    <span css={tw`text-4xl sm:text-5xl lg:text-6xl font-serif`}>
                      Projects
                    </span>
                  </li>
                  <li css={tw`my-4`}>
                    <span css={tw`text-4xl sm:text-5xl lg:text-6xl font-serif`}>
                      Blog
                    </span>
                  </li>
                  <li css={tw`my-4`}>
                    <span css={tw`text-4xl sm:text-5xl lg:text-6xl font-serif`}>
                      About
                    </span>
                  </li>
                  <li css={tw`my-4`}>
                    <span css={tw`text-4xl sm:text-5xl lg:text-6xl font-serif`}>
                      Contact
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul css={tw`flex`}>
                  <li css={tw`mr-6`}>
                    <span css={tw`md:hidden`}>tw</span>
                    <span css={tw`hidden md:block`}>twitter</span>
                  </li>
                  <li css={tw`mr-6`}>
                    <span css={tw`md:hidden`}>ig</span>
                    <span css={tw`hidden md:block`}>instagram</span>
                  </li>
                  <li css={tw`mr-6`}>
                    <span css={tw`md:hidden`}>ln</span>
                    <span css={tw`hidden md:block`}>linkedin</span>
                  </li>
                  <li css={tw`mr-6`}>
                    <span css={tw`md:hidden`}>gh</span>
                    <span css={tw`hidden md:block`}>github</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
