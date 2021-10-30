import { useRef, useState } from 'react'
import tw from 'twin.macro'
import { gsap } from 'gsap'

import useIsomorphicLayoutEffect from '@/effects/useIsomorphicLayoutEffect'

export function Pointer() {
  const [tl, setTl] = useState(() => gsap)

  const pointerRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const links = document.getElementsByClassName('rr--link')

    tl && tl.set(pointerRef.current, { xPercent: -50, yPercent: -50 })

    const pos = { x: 0, y: 0 }
    const mouse = { x: pos.x, y: pos.y }
    const xSet = tl.quickSetter(pointerRef.current, 'x', 'px')
    const ySet = tl.quickSetter(pointerRef.current, 'y', 'px')

    window.addEventListener('mousemove', e => {
      mouse.x = e.x
      mouse.y = e.y
    })

    tl.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - 0.35, tl.ticker.deltaRatio())

      pos.x += (mouse.x - pos.x) * dt
      pos.y += (mouse.y - pos.y) * dt

      xSet(pos.x)
      ySet(pos.y)
    })

    gsap.utils.toArray(links).forEach((link: any, index) => {
      links[index].addEventListener('mouseenter', e => {
        tl.to(pointerRef.current, {
          border: 'none',
          width: '5vw',
          height: '5vw',
          backgroundColor: 'var(--color-primary)',
          mixBlendMode: 'difference',
          opacity: 0.25,
        })
      })

      links[index].addEventListener('mouseleave', e => {
        tl.to(pointerRef.current, {
          border: '1px solid var(--color-primary)',
          width: '10px',
          height: '10px',
          backgroundColor: 'transparent',
          opacity: 1,
        })
      })
    })
  })

  return (
    <>
      <div
        ref={pointerRef}
        css={tw`z-100 w-2.5 h-2.5 bg-transparent border border-primary rounded-full fixed pointer-events-none`}
      ></div>
    </>
  )
}
