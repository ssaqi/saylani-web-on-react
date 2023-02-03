import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IMG from './assests/slider1.jpg';
import ResponsiveAppBar from './Header';
import Footer from './footer';
export default function MediaCard() {
  return (

        <>
        <ResponsiveAppBar/>
    <Card sx={{ maxWidth: 2000 }}>
      <CardMedia
        sx={{ height: 400 }}
        image={IMG}
        title="Saylani Cerficate Distribution"
      />
      <CardContent>
        <Typography style={{color: "#757ce8" , fontSize: "24px"}} gutterBottom variant="h3" component="div">
        <div className="px-4 py-5  text-center">
    <h1
      className="display-3 fw-bold text-dark text-uppercase"
      style={{ fontSize: 35,}}
    >
      SAYLANI MASS IT <span style={{ color: "#8ac642" }}>TRAINING</span>
    </h1>
    <center>
      <div className="line2" />
    </center>
  </div>
        </Typography>
        <Typography variant="body1" color="text.secondary">
         <div className='container'>
        <p className='para'>
        Saylani Mass IT Training Today is the age of information technology and we aim
        to equip our youth with computer programming skills and prepare them for the 
        development of the country. In this regard, our Saylani Mass IT Training
         Program providing vocational training to more than 75,000 students in Web
          and Mobile Application Development, CCNA, Graphics Designing, Computer Based 
          Accounting in Karachi, Hyderabad, Faisalabad, Islamabad. Our goal is 
          to develop more than 1 million software developers across the country, 
          which will add about $100 billion annually to Pakistan's economy.

        </p>
        </div> 
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
   
   <Footer/>

    </>
  );
}