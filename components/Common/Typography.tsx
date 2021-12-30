import tw  from 'twin.macro'
import styled from '@emotion/styled'
 
import {
    CHARGESTATION_SELECTED_TEXT,
    HOVER_LINK,
    SIGNAL_GREEN,
    SIGNAL_ORANGE,
    SIGNAL_RED,
    TEXT_PRIMARY,
    TEXT_SECONDARY,
    TYPO_DISABLED,
    TYPO_PRIMARY,
    TYPO_SECONDARY,
    TYPO_TERTIARY,
  } from './Colors'
 type TypographyProps = {
    isPrimary?: boolean
    isSecondaryHover?: boolean
    isSecondary?: boolean
    isTertiary?: boolean
    isSuccess?: boolean
    isWarning?: boolean
    isError?: boolean
    isSelected?: boolean
    isDisabled?: boolean
    center?: ConstrainBoolean
    isBold?: boolean
    variant?: 'header' | 'text' | 'title' | 'h1' | 's' | 'h2'
    ellipsisOverflow?: boolean
    fullWidth?: boolean
    grow?: boolean
    preline?: boolean
    breakWords?: boolean
    left?: boolean
    leftPadding?: boolean
    lineClamp?: 3
    uppercase?: boolean
    characterLimited?: boolean
    maxCharacter?: number 
    paddingX?: 4
    paddingY?: 4
  }

  const Typography = styled.div<TypographyProps>(
    ({
      isPrimary,
      isSecondary,
      isTertiary,
      isSuccess,
      isWarning,
      isError,
      isSelected,
      isDisabled,
      center,
      isBold,
      variant,
      ellipsisOverflow,
      fullWidth,
      preline,
      grow,
      breakWords,
      left,
      leftPadding,
      onClick,
      lineClamp,
      uppercase,
      maxCharacter,
      isSecondaryHover,
      paddingX,
      paddingY,
    }) => [
      tw`font-body not-italic font-bold `,
      isPrimary && TEXT_PRIMARY,
      isSecondaryHover && [TEXT_SECONDARY,HOVER_LINK],
      isSecondary && [TEXT_SECONDARY],
      isTertiary && TYPO_TERTIARY,
      isSuccess && SIGNAL_GREEN,
      isWarning && SIGNAL_ORANGE,
      isError && SIGNAL_RED,
      isSelected && CHARGESTATION_SELECTED_TEXT,
      isDisabled && TYPO_DISABLED,
      center && tw`text-center`,
      isBold && tw`font-bold`,
      variant === 'h1' && tw`text-2xl leading-8`,
      variant === 'h2' && tw`text-xl leading-8`,
      variant === 'header' && tw`text-base leading-5`,
      variant === 'text' && tw`text-sm leading-5`,
      variant === 'title' && tw`text-lg leading-5`,
      variant === 's' && tw`text-xs leading-4`,
      ellipsisOverflow && tw`overflow-ellipsis overflow-hidden whitespace-nowrap`,
      fullWidth && tw`w-full`,
      grow && tw`flex-grow`,
      preline && tw`whitespace-pre-line`,
      breakWords && tw`break-words text-left`,
      left && tw`text-left`,
      leftPadding && tw`pl-2`,
      onClick && tw`cursor-pointer`,
      uppercase && tw`uppercase`,
      paddingX === 4 && tw`px-4`,
      paddingY === 4 && tw`py-4`,
    ]
  )
  
  export default Typography