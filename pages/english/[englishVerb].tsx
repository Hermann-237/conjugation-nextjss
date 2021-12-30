import React from 'react'
import Header from '../../components/Header'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import Divider from '@mui/material/Divider'
import { useRouter } from 'next/router'
import axios from 'axios'

import { EnglishMessages } from '../../messages/EnglishMessages'
import Input from '../../components/Common/Input'
import CardVerb from '../../components/CardVerb'
import Toolbox from '../../components/Toolbox'
import ModelVerb from '../../components/ModelVerb'
import InfinitifVerb from '../../components/InfinitivVerb/'
import { GetServerSideProps } from 'next'
import { EnglishPopularVerbProps } from '../../components/PopularVerbs/EnglishPopularVerb'
import { EnglishAllVerbProps, EnglishIrregularVerbProps } from '../../components/EnglishIrregularVerb/EnglishIrregularVerb'
import Typography from '../../components/Common/Typography'
import AlphabeticalVerb from '../../components/AlphabeticalVerb'
import InputAutoComplet from '../../components/Common/InputAutoComplet'

type DataTypes = {
  result: string
  infinitive: string
  other_infinitive: string
  preterite: string
  past_participle: string
  model: string
  auxiliary: string
  other_forms:string
  conjugation: {
    mode: string
    conjugation_forms: {
      title: string
      mode_array: string[]
    }[]
  }[]
}
const alphabeticArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z']

const English = ({
  dataVerb,
  popularVerb,
  irregularVerb,
  allVerb,
}: { dataVerb: DataTypes } & EnglishPopularVerbProps &
  EnglishIrregularVerbProps & EnglishAllVerbProps) => {
  const {
    query: { englishVerb },
  } = useRouter()
  const verb = typeof englishVerb ==='string' && englishVerb.split('-').reverse()[0].split('.')[0]
  return (
    <>
      <Header
        title={EnglishMessages.title.verbEnglish(verb)}
        descriptionContent={EnglishMessages.description.verbEnglish(
          verb,
        )}
        keywordsContent={EnglishMessages.key.verbEnglish(verb)}
      />
       <InputAutoComplet data={allVerb.all_verb}/>
      <>
        <Toolbox />
        {dataVerb ? (
          <React.Fragment>
            <InfinitifVerb verbList={[dataVerb]} />
            <Divider style={{ marginTop: '2rem' }} />
            <ModelVerb verbList={[dataVerb]} />
            <CardVerb
              verbList={[dataVerb]}
              popularVerb={popularVerb}
              irregularVerb={irregularVerb}
            />
          </React.Fragment>
        ) : (
          <Typography>This page does not exist</Typography>
        )}
      </>
      <AlphabeticalVerb data ={alphabeticArray}/>
      
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const DEV_URL = process.env.DEV1
  const verbString = context.params?.englishVerb
  const verb =
    typeof verbString === 'string' &&
    verbString.split('-').reverse()[0].split('.')[0]
  const { data: dataVerb } = await axios.get<DataTypes>(
    `${DEV_URL}/english/verb/${verb}`,
  )
  const { data: popularVerb } = await axios.get<EnglishPopularVerbProps>(
    `${DEV_URL}/english/popular`,
  )
  const { data: irregularVerb } = await axios.get<EnglishIrregularVerbProps>(
    `${DEV_URL}/english/irregular`,
  )
  const { data: allVerb } = await axios.get<EnglishAllVerbProps>(
    `${DEV_URL}/english/all-verb`,
  )
  return {
    props: {
      dataVerb,
      popularVerb,
      irregularVerb,
      allVerb,
    },
  }
}

export default English
