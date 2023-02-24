import { Box, Checkbox, Grid, InputAdornment, InputLabel, Paper, TextField, Typography,Container } from "@mui/material"
import Link from '@mui/material/Link'
import Stack from "@mui/material/Stack"
import PillButton from "components/PillButton"
import SimpleInputs from "./simpleInputs"
import EmailIcon from '@mui/icons-material/Email'
import HttpsIcon from '@mui/icons-material/Https'
import ComplexInput from "./complexInput"
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Frame from 'assets/Frame.svg'
import Group from 'assets/Group.svg'
import Shape1 from 'assets/shape-1.svg'
interface Props{
  
    Link1:String,
    Link2:String,
    ForgotPass:String,
    h1Text:String
    
}

function All({ Link1,Link2 ,ForgotPass,h1Text}: Props){
	return(
		<>

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
                                       
                                    <ComplexInput iconComp={<FacebookIcon/>}  textComp="FaceBook ile Daxil Olun" color="#395185"/>

                                    </Box>
                                    <Box sx={{
                                        color: "black",
                                        fontWeight: 600, padding: '10px 0'
                                    }}>
                                        <ComplexInput iconComp={<GoogleIcon/>} textComp="Google Ile Daxil olun" color=" #e93e32" />
                                    </Box>
                                    <Box>
                                        <InputLabel sx={{
                                            color: "black",
                                            fontWeight: 600,
                                            padding: '10px 0'
                                        }}>
                                            Email
                                        </InputLabel>
                                        <TextField fullWidth
                                            placeholder="Email ünvanı"
                                            InputProps={{
                                                startAdornment:
                                                    <InputAdornment position="start">
                                                        <EmailIcon />
                                                    </InputAdornment>,
                                            }}

                                        />
                                    </Box>
                                    <Box sx={{ padding: "20px 0" }}>
                                            <SimpleInputs
                                             LabelText="Sifre"
                                              icon={<HttpsIcon/>} 
                                              placeHolderText="Sifre" 
                                              sx1=""
                                              sx2=""
                                               />
                                    </Box>
                                    <Stack direction={"row"} justifyContent="space-between" >
                                        <Box>
                                            <Checkbox />
                                        </Box>
                                        <Typography sx={{
                                            marginTop: '12px'
                                        }}>
                                            <Link href="#" underline="none" sx={{ color: "black" }}>
                                                {ForgotPass}
                                            </Link>
                                        </Typography>
                                    </Stack>
                                    <Box sx={{ textAlign: "center", margin: "15px 0" }}>
                                        <PillButton txt="Daxil ol" />
                                    </Box>
                                    <Stack direction={'row'} justifyContent="center" gap={2}>
                                        <Link href="#" underline="none">
                                           {Link1}
                                        </Link><Link href="#" underline="none">
                                            {Link2}
                                        </Link>
                                    </Stack>
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
		</>
	)
}

export default All