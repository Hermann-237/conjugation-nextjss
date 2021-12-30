import Link from 'next/link'
import React from 'react'
import { EnglishMessages } from '../../messages/EnglishMessages'
import Section from '../Common/Section'
import Typography from '../Common/Typography'
import Divider from '@mui/material/Divider'

const Toolbox = ():JSX.Element => {
    return (
        <>
          <Section gap={2} flex>
        <Typography variant="text" isTertiary>
          {EnglishMessages.content.toolbox}:
        </Typography>
        <Link href="/" passHref>
          <Typography isSecondaryHover variant="text">
            {EnglishMessages.content.toolboxLink.model}
          </Typography>
        </Link>
        <Divider orientation="vertical" flexItem />
        <Link href="/" passHref>
          <Typography isSecondaryHover variant="text">
            {EnglishMessages.content.toolboxLink.groups}
          </Typography>
        </Link>
        <Divider orientation="vertical" flexItem />
        <Link href="/" passHref>
          <Typography isSecondaryHover variant="text">
            {EnglishMessages.content.toolboxLink.auxiliaries}
          </Typography>
        </Link>
        <Divider orientation="vertical" flexItem />
        <Link href="/" passHref>
          <Typography isSecondaryHover variant="text">
            {EnglishMessages.content.toolboxLink.verb}
          </Typography>
        </Link>
      </Section>
      <Divider style={{marginTop:'2px'}}/>  
        </>
    )
}

export default Toolbox
