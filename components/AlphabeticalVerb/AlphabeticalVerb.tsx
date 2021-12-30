import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'

import Section from '../Common/Section'
import Typography from '../Common/Typography'
import AlphabeticalVerbMessage from './AlphabeticalVerbMessage'

type AlphabeticalVerbProps = {
  data: string[]
}
const SectionBase = styled.div(tw`mx-8 big:mx-20 flex gap-x-4 flex-wrap`)
const AlphabeticalVerb = ({ data }: AlphabeticalVerbProps) => {
  return (
    <>
      <Typography variant="text" center paddingY={4} isSecondary uppercase>
        {AlphabeticalVerbMessage.title}
      </Typography>
      <SectionBase>
        {data.map((alv, index) => (
          <Typography variant="text" isSecondaryHover paddingY={4} center key={index}>
            <Link
              href={'/english/alphabetic/[alphabetic]'}
              as={`/english/alphabetic/conjugation-verb-starting-with-${alv.toLowerCase()}.html`}
              passHref
            >
              {alv}
            </Link>
          </Typography>
        ))}
      </SectionBase>
    </>
  )
}

export default AlphabeticalVerb
