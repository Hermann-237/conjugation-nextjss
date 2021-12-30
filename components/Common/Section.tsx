import tw from 'twin.macro'
import styled from '@emotion/styled'

export type SectionProps = {
  flex?: boolean
  col?: boolean
  gap?: 4 | 3 | 2
  skicky?: boolean
  relative?: boolean
  position?: 'absolute'
  center?: boolean
  centerWithoutFlex?: boolean
  noShrink?: boolean
  itemCenter?: boolean
  flexWrap?: boolean
  fullWidth?: boolean
  left?: boolean
  between?: boolean
}

const Section = styled.div<SectionProps>(
  ({
    flex,
    col,
    gap,
    skicky,
    relative,
    position,
    center,
    centerWithoutFlex,
    noShrink,
    itemCenter,
    flexWrap,
    fullWidth,
    left,
    between,
  }) => [
    flex && tw`flex flex-wrap`,
    col && tw`flex-col`,
    gap === 4 && flex && col && tw`gap-y-4`,
    gap === 4 && flex && !col && tw`gap-x-4`,
    gap === 4 && !flex && col && tw`space-y-4`,
    gap === 4 && !flex && !col && tw`space-x-4`,
    gap === 3 && flex && col && tw`gap-y-3`,
    gap === 3 && flex && !col && tw`gap-x-3`,
    gap === 3 && !flex && col && tw`space-y-3`,
    gap === 3 && !flex && !col && tw`space-x-3`,
    gap === 2 && flex && col && tw`gap-y-2`,
    gap === 2 && flex && !col && tw`gap-x-2`,
    gap === 2 && !flex && col && tw`space-y-2`,
    gap === 2 && !flex && !col && tw`space-x-2`,
    skicky && tw`sticky top-0 z-index[1]`,
    relative && tw`relative`,
    center && tw`items-center justify-center`,
    between && tw`justify-between`,
    centerWithoutFlex && tw`mx-auto`,
    position === 'absolute' && tw`absolute inset-0`,
    noShrink && tw`flex-shrink-0`,
    itemCenter && tw`items-center`,
    flexWrap && tw`flex-wrap`,
    gap === 4 && flex && col && flexWrap && tw`gap-x-4`,
    gap === 4 && flex && !col && flexWrap && tw`gap-y-4`,
    gap === 2 && flex && col && flexWrap && tw`gap-x-2`,
    gap === 2 && flex && !col && flexWrap && tw`gap-y-2`,
    fullWidth && tw`w-full`,
    left && tw`text-left`,
  ],
)
export default Section
