import { useContext, useRef, useState } from 'react'
import Link from 'next/link'
import tw from 'twin.macro'
import { gsap } from 'gsap'

import { HomeContext } from '@/layouts/container/home-context'
import useIsomorphicLayoutEffect from '@/effects/useIsomorphicLayoutEffect'
import { routePage, routeSocial } from '@/config'

export function MenuDefault() {
  const { menu } = useContext(HomeContext)
  const [tl, setTl] = useState(() => gsap.timeline({ paused: true }))

  const mainRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const pageRef = useRef<HTMLDivElement>(null)
  const pageLiRef = useRef([])
  const socialRef = useRef<HTMLDivElement>(null)
  const socialLiRef = useRef([])

  useIsomorphicLayoutEffect(() => {
    tl &&
      tl
        .addLabel('menu', 0)
        .fromTo(
          mainRef.current,
          {
            visibility: 'hidden',
          },
          {
            visibility: 'visible',
            duration: 0.8,
          },
          0
        )
        .fromTo(
          backgroundRef.current,
          {
            width: 0,
            duration: 0.8,
            ease: 'power1.inOut',
          },
          {
            width: '100%',
            duration: 0.8,
            ease: 'power1.inOut',
          },
          0
        )
        .fromTo(
          [pageRef.current, socialRef.current],
          {
            opacity: 0,
            duration: 0.5,
            visibility: 'hidden',
          },
          {
            opacity: 1,
            duration: 0.5,
            visibility: 'visible',
          },
          '>'
        )

    let pageDelay = -0.2
    gsap.utils
      .toArray(pageLiRef.current)
      .forEach((pageLi: HTMLLIElement | any) => {
        tl &&
          tl.fromTo(
            pageLi,
            {
              opacity: 0,
              duration: 0.4,
              delay: pageDelay,
              ease: 'power1.out',
              yPercent: -100,
            },
            {
              opacity: 1,
              duration: 0.4,
              delay: pageDelay,
              ease: 'power1.out',
              yPercent: 0,
            },
            'menu+=0.8'
          )

        pageDelay += 0.2
      })

    let socialDelay = 0.11
    gsap.utils
      .toArray(socialLiRef.current)
      .forEach((socialLi: HTMLLIElement | any) => {
        tl &&
          tl.fromTo(
            socialLi,
            {
              opacity: 0,
              duration: 0.4,
              delay: socialDelay,
              ease: 'power1.out',
              yPercent: 100,
            },
            {
              opacity: 1,
              duration: 0.4,
              delay: socialDelay,
              ease: 'power1.out',
              yPercent: 0,
            },
            'menu+=0.8'
          )

        socialDelay += 0.2
      })

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
        css={tw`w-full h-full fixed top-0 left-0 z-9 overflow-hidden`}
      >
        <div
          ref={backgroundRef}
          css={tw`absolute h-full top-0 right-0 bg-secondary`}
        ></div>
        <div css={tw`w-full h-full absolute left-0 top-0`}>
          <div css={tw`flex min-h-screen items-end lg:items-center`}>
            <div
              ref={containerRef}
              css={tw`w-full flex-grow max-w-screen-lg px-8 py-10 mx-auto sm:px-12 sm:py-20 md:px-20`}
            >
              <div ref={pageRef} css={tw`mb-12`}>
                <ul>
                  {routePage.map((route, index) => (
                    <li
                      key={index}
                      css={tw`my-4`}
                      ref={(element: never) => {
                        pageLiRef.current[index] = element
                      }}
                    >
                      <Link href={route.path}>
                        <a>
                          <span
                            css={tw`text-4xl sm:text-5xl lg:text-6xl font-serif`}
                          >
                            {route.label}
                          </span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div ref={socialRef}>
                <ul css={tw`flex`}>
                  {routeSocial.map((route, index) => (
                    <li
                      css={tw`mr-6`}
                      key={index}
                      ref={(element: never) => {
                        socialLiRef.current[index] = element
                      }}
                    >
                      <a
                        target="_blank"
                        href={route.path}
                        rel="noopener noreferrer"
                      >
                        <span css={tw`md:hidden`}>{route.short}</span>
                        <span css={tw`hidden md:block`}>{route.long}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
