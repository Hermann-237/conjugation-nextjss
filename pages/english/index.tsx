import React,{useEffect} from 'react'
import Header from '../../components/Header'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import { EnglishMessages } from '../../messages/EnglishMessages'
import {useRouter} from 'next/router'


const EnglishIndex = () => {
  const router = useRouter()
  useEffect(()=>{
    router.push('/english/conjugation-english-verb-be.html')
    /* setTimeout(()=>{
      router.push('/english/conjugation-english-verb-be.html')
    },10) */
  },[])
  return (
    <>
      <Header
        title={EnglishMessages.title.english}
        descriptionContent={EnglishMessages.description.english}
        keywordsContent={EnglishMessages.key.english}
      />
    </>
  )
}

export default EnglishIndex
