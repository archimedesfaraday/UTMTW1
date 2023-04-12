import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup(props) {
    const {onClick} = props 
    const handleClick=()=>{
      onClick()
    }
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={handleClick} >Sme</Button>

      <Button onClick={handleClick} >sha</Button>

      <Button onClick={handleClick}>riki</Button>

    </ButtonGroup>
  );
}