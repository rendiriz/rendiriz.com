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

  useIsomorphicLayoutEffect(() => {
    tl &&
      tl
        .to(mainRef.current, {
          duration: 0.5,
          opacity: 1,
        })
        .to(backgroundRef.current, {
          duration: 0.5,
          width: '100%',
          ease: 'power1.inOut',
        })

    if (menu) {
      tl && tl.play()
    } else {
      tl && tl.reverse(1)
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
      </div>
    </>
  )
}
