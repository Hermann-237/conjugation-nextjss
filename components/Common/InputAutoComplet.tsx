import * as React from 'react';
import tw from 'twin.macro'
import styled from '@emotion/styled'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import Section from './Section';
import { useRouter } from 'next/router';

type InputAutoCompletProps = {
    data:string[]
}
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
const SectionBase = styled(Section)(tw`pt-28 mb-5`)

const  InputAutoComplet = ({data}:InputAutoCompletProps)=> {
  const [verb, setVerb] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly string[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); 

      if (active) {
        setOptions([...data]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  const router = useRouter()
  return (
      <SectionBase flex center>
      <Section flex gap={4}>
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 350 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(e,v)=> typeof v ==='string' && router.push(`/english/conjugation-verb-${v}.html`)}
      isOptionEqualToValue={(option, value) => option === value}
      getOptionLabel={(option) => option }
      options={options}
      loading={loading}
      renderInput={(params) => {
        return(
        <TextField
          {...params}
          label="Search for a verb"
           InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Section>
                {loading && <CircularProgress color="primary" size={20}/>}
                {params.InputProps.endAdornment}
              </Section>
            ),
          }} 
        />)
    } }
    />
    </Section>
    </SectionBase>
  );
}

export default InputAutoComplet