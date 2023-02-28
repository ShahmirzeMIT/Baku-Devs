import PageContainer from "components/PageContainer"
import All from "pages/all"
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import HttpsIcon from '@mui/icons-material/Https'
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person';
function SignUp(){
	return(
		<>
		 <PageContainer >
           <All 
           headText="Daxil Olun"
           EmailTitle="Email"
          EmailIcon={<EmailIcon/>}
          NameTitle="Adiniz Ve Soyadiniz"
          Name={<PersonIcon/>}
          SecurityTitle="Sifre"
          SecurityIcon={<HttpsIcon/>}
          ChSecurityTitle="Sifrenin Tekrari"
          ChSecurityIcon={<HttpsIcon/>}
          FaceBook={<FacebookIcon sx={{color:"white"}} />}
          FaceBookClr="true"
          Google={<GoogleIcon sx={{color:"white"}} />}
          GoogleClr=""
          check="false"
		NameCh="true"
		SecurityCh="true"
		ChSecurityCh="true"
		FaceBookCh="true"
		GoogleCh="true"
           />
       </PageContainer>    
		</>
	)
}

export default SignUp