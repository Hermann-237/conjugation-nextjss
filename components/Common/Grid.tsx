import tw from 'twin.macro'
import styled from '@emotion/styled'

type GridProps = {
  cols?: 3 | 2
  inline?: boolean
}

const Grid = styled.div(({ cols = 3, inline }: GridProps) => [
  tw`grid gap-4`,
  cols === 3 && tw`grid-cols-3`,
  cols === 2 && tw`grid-cols-2`,
  inline && tw`inline-grid`,
])

export default Grid