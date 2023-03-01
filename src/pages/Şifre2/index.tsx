import PageContainer from "components/PageContainer";
import All from "pages/all";

import HttpsIcon from '@mui/icons-material/Https'
import EmailIcon from '@mui/icons-material/Email'
function Sifre2() {
	return(
		<PageContainer>
  <All
     	headText="Sifrenin Yenilenmesi	"
          EmailTitle="Email-e Gelen Kodu"
          EmailIcon={<EmailIcon/>}
          NameTitle="Adiniz Ve Soyadiniz"
          Name=""
          SecurityTitle="Sifre"
		checkText=""
          SecurityIcon={<HttpsIcon/>}
          ChSecurityTitle="Sifrenin Tekrari"
          ChSecurityIcon={<HttpsIcon/>}
          FaceBook=""
          FaceBookClr=""
          Google=""
          GoogleClr=""
          check="true"
		NameCh=""
		SecurityCh="true"
		ChSecurityCh="true"
		FaceBookCh=""
		GoogleCh=""
           />
		</PageContainer>
		
	)
}

export default Sifre2