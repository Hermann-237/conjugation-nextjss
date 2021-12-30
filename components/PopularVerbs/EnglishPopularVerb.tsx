import React from 'react'
import LinkWithText from '../Common/LinkWithText'
import { PopularBaseUI } from '../Common/Responsive/CardContainer.style'
import Section from '../Common/Section'

export type EnglishPopularVerbProps={
    popularVerb:{
        popular_verb:string[]
    } 
}
const EnglishPopularVerb = ({popularVerb}:EnglishPopularVerbProps) => {
    return (
        <PopularBaseUI>
            {
                popularVerb.popular_verb.map((item,index)=>(
                    <React.Fragment key={index}>
                        <LinkWithText text={item} language={'english'} dynamicRoute={'englishVerb'}/>
                    </React.Fragment>
                ))
            }
        </PopularBaseUI>
    )
}

export default EnglishPopularVerb
