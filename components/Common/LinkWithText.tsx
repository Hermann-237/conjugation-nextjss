import Link from 'next/link'
import React from 'react'
import Typography from './Typography'

type LinkWithTextProps = {
    language:string
    text:string
    dynamicRoute:string
}

const LinkWithText= ({language,dynamicRoute,text}:LinkWithTextProps):JSX.Element => {
    return (
        <Typography variant='text' isSecondaryHover>
            <Link href={`/${language}/[${dynamicRoute}]`} as={`/${language}/conjugation-${language}-verb-${text.trim()}.html`} passHref>{text}</Link>
        </Typography>
    )
}

export default LinkWithText
