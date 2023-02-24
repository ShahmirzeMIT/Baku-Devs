import All from "pages/all"
import { Box, Checkbox, Grid, InputAdornment, InputLabel, Paper, TextField, Typography,Container,Stack } from "@mui/material"
import Frame from 'assets/Frame.svg'
import Group from 'assets/Group.svg'
import Shape1 from 'assets/shape-1.svg'
import PageContainer from "components/PageContainer"
import Link from '@mui/material/Link'
import PillButton from "components/PillButton"
import FacebookIcon from '@mui/icons-material/Facebook';
import ComplexInput from "pages/all/complexInput"
function SignUp(){
	return(
	
	<PageContainer>
	  
		 <Box sx={{ backgroundColor: "#f5f5f5", py: 4 }}>
                <Container maxWidth="lg" sx={{ py: 4 }} >
                    <Grid container >
                        <Grid item sm={3} sx={{
                            position:'relative',
                            width: "100%",
                            textAlign: "center"
                        }}>
                            <Stack    sx={{
                                width:"100%",
                                flexDirection:{xs:"row",sm:"column"},
                                justifyContent:'space-between'
                            }}>
                                <Box sx={{
                                    position: {xs:"inherit",sm:"absolute"},
                                    top: 0,
                                    right: "20px",
                                }}>
                                    <img src={Shape1} alt="" />
                                </Box>
                                <Box sx={{
                                    position: {xs:"inherit",sm:"absolute"},
                                    bottom: 0,
                                    right: "20px"
                                }}>
                                    <img src={Frame} alt="" />
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item sm={7} md={6} sx={{
                            width: "100%"
                        }}>
                            
                            <Box>
                           
					   <Paper sx={{ padding: "20px", maxWidth: 450, margin: "0 auto" }} >
					   <Box sx={{
                                        color: "black",
                                        fontWeight: 600,
                                        padding: '10px 0'
                                    }}>
							<ComplexInput iconComp={<FacebookIcon/>}  textComp="FaceBook ile Daxil Olun" color="red" />
  						</Box>
					   </Paper>
                            </Box>                   
					   
					</Grid>
                        <Grid item md={3} sm={2} sx={{

                            width: "100%",
                            position: "relative",
                            textAlign: "center"
                        }}>
                            <Box sx={{
                                marginTop: { xs: 10 },
                                position: { sm: "absolute" },
                                top: { sm: "20%" },
                                left:{sm:"20px"}
                            }}>
                                <img src={Group} alt="" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
		  
	</PageContainer>
	)
}

export default SignUp