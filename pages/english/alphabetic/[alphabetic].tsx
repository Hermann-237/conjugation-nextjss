import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import Header from '../../../components/Header'
import { EnglishMessages } from '../../../messages/EnglishMessages'
import { useRouter } from 'next/router'
import Input from '../../../components/Common/Input'
import Typography from '../../../components/Common/Typography'
import AlphabeticMessage from './AlphabeticMessage'
import { GetServerSideProps } from 'next'
import { EnglishAllVerbProps } from '../../../components/EnglishIrregularVerb/EnglishIrregularVerb'
import axios from 'axios'
import Section from '../../../components/Common/Section'
import LinkWithText from '../../../components/Common/LinkWithText'
import InputAutoComplet from '../../../components/Common/InputAutoComplet'

const EnglishAlphabetic = ({allVerb}:EnglishAllVerbProps) => {
    const {
        query: { alphabetic },
      } = useRouter()
  const verb = typeof alphabetic ==='string' && alphabetic.split('-').reverse()[0].split('.')[0]
  const datafilter = allVerb.all_verb.filter(v => v.split('')[0] === verb)
  const headerText = `start with ${verb.toString().toUpperCase()}`
    return (
        <>
        <Header
        title={EnglishMessages.title.verbEnglish(headerText)}
        descriptionContent={EnglishMessages.description.verbEnglish(
            headerText
        )}
        keywordsContent={EnglishMessages.key.verbEnglish(headerText)}
      />
      <InputAutoComplet data={allVerb.all_verb}/>
        <>
        <Typography uppercase variant='header'isSecondary center paddingY={4}> {AlphabeticMessage.title(verb)} </Typography>
        <Section flex flexWrap gap={4}>
        {
             datafilter.map((v,index)=>(
                <LinkWithText text={v} language={'english'} dynamicRoute={'englishVerb'} key={index}/>
             ))
         }
        </Section>
         
        </>
        </>
        
    )
}
export const getServerSideProps: GetServerSideProps = async context => {
    const DEV_URL = process.env.DEV1
    const { data: allVerb } = await axios.get<EnglishAllVerbProps>(
      `${DEV_URL}/english/all-verb`,
    )
    return {
      props: {
        allVerb,
      },
    }
  }
export default EnglishAlphabetic
