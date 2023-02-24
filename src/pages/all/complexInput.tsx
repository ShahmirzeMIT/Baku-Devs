import { Box, InputAdornment, InputLabel, TextField } from "@mui/material"

interface Props{
	iconComp:React.ReactNode,
	textComp:String,
	color:String
	
 }
function ComplexInput({iconComp ,textComp,color}:Props) {
	return(
		<>
		  <TextField fullWidth
		 
                                            sx={{
                                                '& input': {
                                                    paddingLeft: '40px'
                                                }
                                            }}
								    placeholder={`${textComp}`}
								 
                                            InputProps={{
									
                                                startAdornment:
                                                    <Box
                                                        sx={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            height: '100%',
                                                            width: 50,
                                                            backgroundColor:`${color}`,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderTopLeftRadius: 'inherit',
                                                            borderBottomLeftRadius: 'inherit'
                                                        }}
											
                                                    >
                                                         {iconComp}
                                                    </Box>
                                            }}
                                       
							 
							 />

		</>
	)
}
export default ComplexInput