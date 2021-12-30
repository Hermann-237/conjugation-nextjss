import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const Base = styled.div(tw`p-4 w-full flex justify-center mb-4 pt-28 `)
const Input = () => {
  const [verb,setVerb] = useState('eat')
  const router = useRouter()
  console.log(router)
  return (
      <Base>
      <Paper
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for a verb"
        inputProps={{ 'aria-label': 'Search for a verb' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={()=>{
        setVerb(verb)
        router.push(`/english/conjugation-english-verb-${verb}.html`)
      }}>
        <SearchIcon/>
      </IconButton>
    </Paper>
      </Base>
    
  )
}
export default Input
