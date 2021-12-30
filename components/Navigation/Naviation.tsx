import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useBoolean } from 'react-use'
import { Menu, Close, LocalLibrary } from '@material-ui/icons'
import { useRouter } from 'next/router'

import NavLink from '../Common/NavLink'
import menuItem from '../../hooks/menuItem'
import goHome from '../../hooks/goHome'
import { BG_NAVBAR, HOVER_LINK, TEXT_SECONDARY } from '../Common/Colors'

const NavigationBase = styled.nav(
  ()=>[tw`fixed left-0 right-0 top-0 flex items-center w-full big:px-17 px-2 py-2 flex-wrap shadow-md z-50`,
  BG_NAVBAR,
]
)
const LogoBase = styled.div(
  tw`cursor-pointer p-2 mr-4 inline-flex items-center`,
)
const LogoTitle = styled.span(
  tw` text-2xl font-bold tracking-wide mx-2`,
  TEXT_SECONDARY,
)
const HamburgerIcon = styled.div(
  tw`cursor-pointer font-bold inline-flex p-3  big:hidden ml-auto`,
  TEXT_SECONDARY,
  HOVER_LINK,
)
const Container = styled.div(({ isHidden }: { isHidden: boolean }) => [
  tw` hidden w-full big:inline-flex big:flex-grow big:w-auto
`,
  isHidden && tw`block`,
])
const NavLi = styled.li(
  tw` big:inline-flex big:flex-row big:ml-auto flex flex-col margin-left[-2rem] `,
)

const Naviation = () => {
  const [hidden, setHidden] = useBoolean(false)
  const router = menuItem(useRouter().pathname.split('/')[1])
  const routerLengh = useRouter().pathname.split('/').length
  const routerSecondItem = useRouter().pathname.split('/')[2]
  
  return (
    <NavigationBase>
      <LogoBase>
        <Link href="/" passHref>
          <LocalLibrary color="primary" className="cursor-auto" />
        </Link>
        <Link href="/" passHref>
          <LogoTitle>STO</LogoTitle>
        </Link>
      </LogoBase>
      <HamburgerIcon onClick={setHidden}>
        {hidden ? <Close color="primary" /> : <Menu color="primary" />}
      </HamburgerIcon>
      <Container isHidden={hidden}>
        {router && (
          <NavLi>
            <NavLink
              text={router.home}
              path={`/${goHome(router.page)}`}
              isActiv={routerLengh === 2}
            />
            <NavLink
              text={router.synonym}
              path={`/${router.page}/synonym`}
              isActiv={routerSecondItem === 'synonym'}
            />
            <NavLink
              text={router.translate}
              path={`/${router.page}/translate`}
              isActiv={routerSecondItem === 'translate'}
            />
            <NavLink
              text={router.contact}
              path={`/${router.page}/contact`}
              isActiv={routerSecondItem === 'contact'}
            />
            <NavLink
              text={router.blog}
              path={`/${router.page}/blog`}
              isActiv={routerSecondItem === 'blog'}
            />
          </NavLi>
        )}
      </Container>
    </NavigationBase>
  )
}

export default Naviation
