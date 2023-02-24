
import { Box, InputAdornment, InputLabel, TextField } from "@mui/material"

interface Props{
	LabelText:String,
	icon:React.ReactNode,
	placeHolderText:String | undefined,
	sx1:React.ReactNode | String,
	sx2:React.ReactNode
}

function SimpleInputs({LabelText,icon,placeHolderText}:Props){
	return(
		<>
		

<InputLabel sx={{
    color: "black",
    fontWeight: 600,
    padding: '10px 0'
}}>
   {LabelText}
</InputLabel>
<TextField fullWidth
    placeholder={`${placeHolderText}`}
    InputProps={{
	   startAdornment:
		  <InputAdornment position="start">
			 {icon}
		  </InputAdornment>,
    }}

/>

		</>
	)
}

export default SimpleInputs