import React from 'react';
import {FormControl, TextField, InputLabel} from "@mui/material";

function InputComp({inputName = "", placeholder = '', rest}:{inputName?:string, placeholder?:string, rest?:any}) {

    return (
        <>
            <FormControl>
                <InputLabel htmlFor={'outlined-basic'}  >{inputName}</InputLabel>
                <TextField  id={'outlined-basic'} variant="outlined"  {...rest} label={placeholder} ></TextField>
            </FormControl>
        </>
    );
}

export default InputComp;