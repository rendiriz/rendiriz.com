import { useContext } from 'react'
import tw from 'twin.macro'

import { CgMenuMotion, CgClose } from 'react-icons/cg'

import { HomeContext } from '@/layouts/container/home-context'

export const ToggleMenu = () => {
  const { menu, toggleMenu } = useContext(HomeContext)

  return (
    <>
      <button onClick={toggleMenu}>
        {menu ? <CgClose size="20" /> : <CgMenuMotion size="20" />}
      </button>
    </>
  )
}
