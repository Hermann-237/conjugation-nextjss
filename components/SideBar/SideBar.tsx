import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import Typography from '../Common/Typography'
import SideBarMessages from './SideBarMessages'
import { SidebarStyledUI } from '../Common/Responsive/CardContainer.style'
import EnglishPopularVerb, { EnglishPopularVerbProps } from '../PopularVerbs/EnglishPopularVerb'
import EnglishIrregularVerb, { EnglishIrregularVerbProps } from '../EnglishIrregularVerb/EnglishIrregularVerb'

const Base = styled(SidebarStyledUI)(tw`rounded-xl`)
const Container = styled.div(tw`px-8 py-4 border w-full rounded shadow-sm`)
const SideBar:React.FC<EnglishPopularVerbProps & EnglishIrregularVerbProps> = ({popularVerb,irregularVerb}) => {
    return (
        <Base>
        <Container>
            <Typography variant='text' isSecondary uppercase>
                {SideBarMessages.popularVerb}
            </Typography>
        </Container>
         <EnglishPopularVerb popularVerb={popularVerb}/>
         <Container>
            <Typography variant='text' isSecondary uppercase>
                {SideBarMessages.irregularVerb}
            </Typography>
        </Container>
         <EnglishIrregularVerb irregularVerb={irregularVerb} />
        </Base>
    )
}

export default SideBar
