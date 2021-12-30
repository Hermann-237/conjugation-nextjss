import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Dropdown = ()=> {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Dropdown

/*  import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import Image from 'next/image'
import { ArrowDropDown } from '@material-ui/icons'

import EnglandIcon from '../../assets/img/england.png'
import FrenchIcon from '../../assets/img/french.png'
import GermanIcon from '../../assets/img/german.png'
import Section from './Section'
import { useBoolean } from 'react-use'

type DropdownProps = {
  linkText: string
}
const NavUl = styled.ul(
  tw` font-bold cursor-pointer big:inline-flex big:w-auto bigphone:px-3 big:py-3 rounded text-simplecyto_secondary hover:text-simplecyto_primary`,
)

const DropdownBase = styled.li(tw`big:list-none big:mt-6.5 big:relative `)
const Container = styled.div(
  tw` bg-common shadow-xl rounded flex flex-col  top-14  w-32  p-2 absolute`,
)
const LinkStyled = styled(Link)(tw` px-4 py-2 `)
const ImagStyled = styled(Image)(tw` cursor-pointer`)
const LanguageBase = styled.span(
  tw` px-4 py-2 text-simplecyto_secondary cursor-pointer font-bold`,
)
const ItemBase = styled.div(tw`hover:bg-primary-gray w-full`)
const ArrowDropDownStyled = styled(ArrowDropDown)(tw``)
const LanguageBaseSelect = styled.div(tw`mt-1 ml-10 cursor-pointer `)
const Dropdown = (): JSX.Element => {
  const [open,setOpen] = useBoolean(false)
  return (
    <div>
      <DropdownBase>
       <LanguageBaseSelect style={{display:'flex',height:'16px',justifyContent:'center',alignItems:'center'}}>
          <LinkStyled href="/english" passHref>
            <Image src={EnglandIcon} width={20} height={12} />
          </LinkStyled>
         <ArrowDropDown color="primary"  /> 
        </LanguageBaseSelect> 

      </DropdownBase>
       <Container>
        <ItemBase>
          <Link href="/" passHref>
            <ImagStyled src={FrenchIcon} width={20} height={12} />
          </Link>
          <Link href="/" passHref>
            <LanguageBase>French</LanguageBase>
          </Link>
        </ItemBase>
        <ItemBase>
          <Link href="/" passHref>
            <ImagStyled src={GermanIcon} width={20} height={12} />
          </Link>
          <Link href="/" passHref>
            <LanguageBase>French</LanguageBase>
          </Link>
        </ItemBase>
      </Container> 
    </div>
  )
}

export default Dropdown  */
