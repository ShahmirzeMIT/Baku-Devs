
 import EmailIcon from '@mui/icons-material/Email'
 import FacebookIcon from '@mui/icons-material/Facebook'
 import GoogleIcon from '@mui/icons-material/Google'
 import HttpsIcon from '@mui/icons-material/Https'
// import { Box, Checkbox, Grid, InputAdornment, InputLabel, Paper, TextField, Typography } from "@mui/material"
// import Link from '@mui/material/Link'
// import { Container, Stack } from '@mui/system'

// import Frame from 'assets/Frame.svg'
// import Group from 'assets/Group.svg'
// import Shape1 from 'assets/shape-1.svg'
import PageContainer from "components/PageContainer"
import All from "pages/all"
// import PillButton from "components/PillButton"
// // A: placeholder yoxdu
// A: checkbox label yoxdu
// A: responsive qaqas ucdu goye

export const SignIn=()=>{
    return (
        <PageContainer >
           <All 
           checkText="Yadda Saxla"
           headText="Daxil Olun"
           EmailTitle="Email"
          EmailIcon={<EmailIcon/>}
          NameTitle=""
          Name=""
          SecurityTitle="Sifre"
          SecurityIcon={<HttpsIcon />}
          ChSecurityTitle=""
          ChSecurityIcon=""
          FaceBook={<FacebookIcon sx={{color:"white"}} />}
          FaceBookClr="true"
          Google={<GoogleIcon sx={{color:"white"}}/>}
          GoogleClr=""
          check="false"
          NameCh=""
            SecurityCh="true"
            ChSecurityCh="true"
            FaceBookCh="true"
            GoogleCh="true"
            
           />
       </PageContainer>    
    )
}


