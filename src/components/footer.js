import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
export default function Footer() {
  return (
    <div className='container-fluid' style={{backgroundColor: "#f8f9fa"}}>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="2300px">
        <Box sx={{my: 1, bgcolor: '#f8f9fa', height: '10vh' }} />
        <h1 className='heading'>GET IN TOUCH</h1>
     <div className='main'>
    
     <div className='f1' >
     <FacebookRoundedIcon style={{color: "#8ac642",}}/>
     </div>
     <div className='f1'>
      <LinkedInIcon style={{color: "#8ac642",}}/>
     </div>
     <div className='f1'>
      <InstagramIcon style={{color: "#8ac642",}}/>
     </div>
     <div className='f1'>
      <GoogleIcon style={{color: "#8ac642",}}/>
     </div>
     
     </div>
     
   <p className='last'>Saylani Mass IT Training 2022</p>




      </Container>
    </React.Fragment>
    </div>
  );
}