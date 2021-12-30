import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import { HOVER_LINK, TEXT_SECONDARY,TEXT_PRIMARY } from './Colors'

const NavUl = styled.ul(({isActiv}:{isActiv:boolean})=>[tw`font-body not-italic font-bold  cursor-pointer big:inline-flex big:w-auto bigphone:px-3 big:py-2 rounded `,
TEXT_SECONDARY,HOVER_LINK,
isActiv && TEXT_PRIMARY
])

type NavLinkProps = {
    text?:string 
    path:string 
    isActiv:boolean
}
const NavLink = ({text,path,isActiv}:NavLinkProps) => {
  return (
    <NavUl isActiv={isActiv}>
      <Link href={path} passHref>
        {text}
      </Link>
    </NavUl>
  )
}

export default NavLink
