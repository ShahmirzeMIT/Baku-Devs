
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import HttpsIcon from '@mui/icons-material/Https'
import { Box, Checkbox, Grid, InputAdornment, InputLabel, Paper, TextField, Typography } from "@mui/material"
import Link from '@mui/material/Link'
import { Container, Stack } from '@mui/system'

import Frame from 'assets/Frame.svg'
import Group from 'assets/Group.svg'
import Shape1 from 'assets/shape-1.svg'
import PillButton from "components/PillButton"
// A: placeholder yoxdu

interface Props{
    headText:String,
    EmailTitle:String,
    EmailIcon:React.ReactNode | String,
    NameTitle:String,
    Name:React.ReactNode | String,
    SecurityTitle:String,
    SecurityIcon:React.ReactNode | String,
    ChSecurityTitle:String,    
    ChSecurityIcon:React.ReactNode | String,
    FaceBook:React.ReactNode | String,
    FaceBookClr:String,
    Google:React.ReactNode | String,
    GoogleClr:String,
    check:Boolean | String 
}

function All({headText,
    EmailTitle,
   EmailIcon,
   NameTitle,
   Name,
   SecurityTitle,
   SecurityIcon,
   ChSecurityTitle,
   ChSecurityIcon,
   FaceBook,
   FaceBookClr,
   Google,
   GoogleClr,
   check}:Props){
    return(
        <Box sx={{ backgroundColor: "#f5f5f5", py: 4 }}>
        <Container maxWidth="lg" sx={{ py: 4 ,maxHeight:1200}} >
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
                        <Typography variant="h4" sx={{textAlign:"center",
                            fontWeight:"600",
                            color:'rgba(27, 34, 33, 1)'
                    }}>
                            Salam
                        </Typography>
                        <Paper sx={{ padding: "20px", maxWidth: 450, margin: "0 auto" }} >
                          
                            <Box sx={{
                                color: "black",
                                fontWeight: 600,
                                padding: '10px 0'
                            }}>
                               
                            </Box>
                            <Box sx={{
                                color: "black",
                                fontWeight: 600, padding: '10px 0'
                            }}>
                            </Box>
                            <Box>
                                <InputLabel sx={{
                                    color: "black",
                                    fontWeight: 600,
                                    padding: '10px 0'
                                }}>
                                    {EmailTitle}
                                </InputLabel>
                                <TextField fullWidth
                                    placeholder="Email ünvanı"
                                    InputProps={{
                                        startAdornment:
                                            <InputAdornment position="start">
                                                {EmailIcon}
                                            </InputAdornment>,
                                    }}

                                />
                            </Box>

                            <Box sx={{ padding: "20px 0" }}>
                                             <InputLabel sx={{
                                    color: "black",
                                    fontWeight: 600,
                                    padding: '10px 0'
                                }}>
                                    {SecurityTitle}
                                </InputLabel>
                                <TextField fullWidth
                                    placeholder="Sifreni Daxil et"
                                    InputProps={{
                                        startAdornment:
                                            <InputAdornment position="start">
                                                {SecurityIcon}
                                            </InputAdornment>,
                                    }}

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
                                      
                                    </Link>
                                </Typography>
                            </Stack>
                            <Box sx={{ textAlign: "center", margin: "15px 0" }}>
                                <PillButton txt="Daxil ol" />
                            </Box>
                            <Stack direction={'row'} justifyContent="center" gap={2}>
                                <Link href="#" underline="none">
                                  
                                </Link><Link href="#" underline="none">
                                    
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
    )
}

export default All