import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import Section from '../Common/Section'
import Typography from '../Common/Typography'
import Link from 'next/link'
import { DataType } from '../CardVerb/CardVerb'
import LinkWithText from '../Common/LinkWithText'

const SectionContainer = styled.div(tw`mt-4 border-2  big:flex  items-center justify-between`)

const ModelVerb = ({verbList}:DataType) => {
    const [{model,auxiliary,other_forms}] = verbList

    const auxiliaryArray = auxiliary.split(',')
    return (
        <SectionContainer>
      <Section flex gap={2}>
           <Typography variant='text' isTertiary>Model:</Typography>
           <LinkWithText language={'english'} dynamicRoute={'englishVerb'} text={model} />
       </Section>
       <Section flex gap={2}>
           <Typography variant='text' isTertiary>Auxiliary:</Typography>
            <LinkWithText language={'english'} dynamicRoute={'englishVerb'} text={auxiliaryArray[0]}/>
           <Typography variant='text' isSecondaryHover>,</Typography>
           <LinkWithText language={'english'} dynamicRoute={'englishVerb'} text={auxiliaryArray[1]}/> 
       </Section>
       <Section flex gap={2}>
           <Typography variant='text' isTertiary>Other forms:</Typography>
           <Typography variant='text' isSecondary>{other_forms}</Typography>
       </Section>
      </SectionContainer>
    )
}

export default ModelVerb
