 import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import Link from 'next/link'
import Typography from '../Common/Typography'

const Base = styled.div(()=>[tw`px-2 flex justify-center bg-simplecyto_secondary text-icon-primary`])
const Container = styled.div(()=>[tw`flex flex-wrap`])
const BigSection = styled.div(()=>[tw`grid grid-cols-1 big:grid-cols-2 gap-2`])
const Section = styled.div(()=>[tw`mb-5`])
const Paragraphe = styled.p(()=>[tw`cursor-pointer`])

const Footer = ():JSX.Element => {
    const newdate = (new Date()).getFullYear()
    return (
            <Base>
              <Container>
                  <BigSection>
                      <Link href='/privacy' passHref> 
                       <Paragraphe>Privacy Policy</Paragraphe>
                      </Link>
                  <Section>
                      <p>Copyright ©  2020-{newdate} Simplicyto Company S.L. All rights reserved </p>
                  </Section>
                  </BigSection>
              </Container>
            </Base>
    )
}

export default Footer 
