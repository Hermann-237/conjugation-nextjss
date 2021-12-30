import React from 'react'
import LinkWithText from '../Common/LinkWithText'
import { PopularBaseUI as IrregularBaseUI } from '../Common/Responsive/CardContainer.style'

export type EnglishIrregularVerbProps={
    irregularVerb:{
        irregular_verb:string[]
    } 
}
export type EnglishAllVerbProps={
    allVerb:{
        all_verb:string[]
    } 
}
const EnglishIrregularVerb = ({irregularVerb}:EnglishIrregularVerbProps) => {
    return (
        <IrregularBaseUI>
            {
                irregularVerb.irregular_verb.map((item,index)=>(
                    <React.Fragment key={index}>
                        <LinkWithText text={item} language={'english'} dynamicRoute={'englishVerb'}/>
                    </React.Fragment>
                ))
            }
        </IrregularBaseUI>
    )
}

export default EnglishIrregularVerb