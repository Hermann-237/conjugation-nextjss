import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'

import Typography from '../../components/Common/Typography'
import { BaseStyledUI, CardBaseStyledUI, CardContainer, CardUI } from '../../components/Common/Responsive/CardContainer.style'
import SideBar from '../SideBar/SideBar'
import { EnglishPopularVerbProps } from '../PopularVerbs/EnglishPopularVerb'
import { EnglishIrregularVerbProps } from '../EnglishIrregularVerb/EnglishIrregularVerb'

export type DataType = {
    verbList:{
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
    }[]
}

const Base = styled(BaseStyledUI)(tw`mt-10`)
const CardBase = styled(CardBaseStyledUI)(tw`p-4 shadow mt-4 rounded`)
const CardUIStyled = styled(CardUI)(tw`p-4 shadow rounded bg-common`)
const CardItem = styled.div(tw`px-4 flex justify-start gap-x-2 gap-y-0`)

const CardVerb = ({verbList,popularVerb,irregularVerb}:DataType 
    & EnglishPopularVerbProps 
    & EnglishIrregularVerbProps
    ) => {
    return (
        <Base>
        <CardBase>
            {
                verbList[0].conjugation.map(({conjugation_forms,mode},index)=>(
                  <React.Fragment key={index}>
                     <Typography uppercase variant='header'isSecondary center paddingY={4}> {mode} </Typography>
                     <CardContainer>
                         {
                             conjugation_forms.map(({title,mode_array},formIndex)=>(
                                <CardUIStyled key={`${title}-${index}-${formIndex}`}>
                                   <Typography variant='text' isSecondary paddingX={4}  paddingY={4}>{title}</Typography>
                                   {
                                       mode_array.map((item,verbIndex)=>{
                                           const arrItem = item.split(' ')
                                           const firstItem = arrItem.shift()
                                           const lastItems = arrItem.pop()
                                          return(
                                             <CardItem key={`${item}-${verbIndex}`}>
                                               <Typography variant='text' isTertiary center>{firstItem}</Typography>
                                               {
                                                   arrItem.map((element,indexEl)=>(
                                                       <Typography variant='text' isSecondary center key={`${element}-${indexEl}`}>{element}</Typography>
                                                   ))
                                               }
                                               <Typography variant='text' isPrimary center>{lastItems}</Typography>
                                             </CardItem>
                                          )
                                       })
                                   }
                                </CardUIStyled>
                             ))
                         }
                     </CardContainer>
                  </React.Fragment>
                ))
            }
       </CardBase>
       <SideBar popularVerb={popularVerb} irregularVerb={irregularVerb}/>
       </Base>
    )
}

export default CardVerb
