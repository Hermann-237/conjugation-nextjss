import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'

import Section from '../Common/Section'
import Typography from '../Common/Typography'
import { DataType } from '../CardVerb/CardVerb'

const ButtonBase = styled.div(tw`mt-4 border-2 shadow rounded-xl p-4 big:mx-32 big:flex items-center justify-between`)

const InfinitifVerb = ({verbList}:DataType):JSX.Element => {
    const [{infinitive,past_participle,preterite}] = verbList
    return (
        <ButtonBase>
      <Section flex gap={2}>
           <Typography variant='text' isTertiary>Infinitive:</Typography>
           <Typography variant='text' isSecondary>{infinitive}</Typography>
       </Section>
       <Section flex gap={2}>
           <Typography variant='text' isTertiary>Preterite:</Typography>
           <Typography variant='text' isSecondary>{preterite}</Typography>
       </Section>
       <Section flex gap={2}>
           <Typography variant='text' isTertiary>Past participle:</Typography>
           <Typography variant='text' isSecondary>{past_participle}</Typography>
       </Section>
      </ButtonBase>
    )
}

export default InfinitifVerb
