import IMG1 from './assests/MEAN-Vs-MERN.jpg'
import IMG2 from './assests/gd.jpg'
import IMG3 from './assests/Ai.jpg'
import IMG4 from './assests/cisco.jpg'
import IMG11 from './assests/sir ali.jpg'
import IMG12 from './assests/sir bilal patel.jpg'
import IMG13 from './assests/sir ghous.jpg'
import IMG14 from './assests/sir inzamam.jpg'
import IMG15 from './assests/sir ishaq.jpg'
import IMG16 from './assests/sir qasim.jpg'
import IMG17 from './assests/sir zeeshan.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react'
import Footer from './footer';
import ResponsiveAppBar from './Header';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function Coureses() {
  return (
    <>
    <ResponsiveAppBar/>
    <div className="containe-fluid bg-light">
  <br/><br/>
<h5 className="H3AD">______CATEGORIES______</h5>
<h1>Courses Categories</h1>
<br/><br/>
<div className="container">
<div className="row row-cols-1 row-cols-md-3 g-2">
  <div className="col">
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="210"
        image={IMG1}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{textTransform: "uppercase", fontSize: "16px", fontWeight: "bold", color: "#8ac642"}}>
          Web & Mobile Application
        </Typography>
        <Typography variant="body2" color="text.secondary">
      <center><Avatar alt="Remy Sharp" src={IMG15} /></center>
          <p style={{fontWeight: "bold", textTransform: "uppercase"}}> Sir Ishaq Bhojani </p>
          Teacher of Software Development at Saylani Mobile Apps Software Development
          and Principal Software Engineer at Nisum
        </Typography>
      </CardContent>
      
    </Card>
  </div>
  <div className="col">
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="210"
        image={IMG1}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{textTransform: "uppercase", fontSize: "16px", fontWeight: "bold", color: "#8ac642"}}>
          Web & Mobile Application 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <center>  <Avatar alt="Remy Sharp" src={IMG14}/></center>
        <p style={{fontWeight: "bold", textTransform: "uppercase"}}> Sir inzamam Chatbot wala </p>
        Artificial Intelligence Chatbot, and Voice UI Developer, Trainer, Keynote Speaker, Founder sysBorg.
        </Typography>
      </CardContent>
    
    </Card> 
  </div>
  <div className="col">
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="210"
        image={IMG1}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div"style={{textTransform: "uppercase", fontSize: "16px", fontWeight: "bold", color: "#8ac642"}}>
          Web & Mobile Application
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <center>  <Avatar alt="Remy Sharp" src={IMG13} /></center>
        <p style={{fontWeight: "bold", textTransform: "uppercase"}}> Sir Ghous Ahmed </p>
        Works at Saylani Welfare Mass Training & Job Creation Program and Tech Kolachi
        and Past: Genesis Solution
        </Typography>
      </CardContent>
     
    </Card>
  </div>
  <br/>
  <div className="col">
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="210"
        image={IMG2}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{textTransform: "uppercase", fontSize: "16px", fontWeight: "bold", color: "#8ac642"}}>
          Graphics Design & Video Editing
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <center>  <Avatar alt="Remy Sharp" src={IMG12} /></center>
        <p style={{fontWeight: "bold", textTransform: "uppercase"}}> Sir Bilal Patel </p>
        Student at University of Karachi and Senior Contributor at Freepik
        </Typography>
      </CardContent>
  
    </Card>
 </div>
 <div className="col">
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="210"
        image={IMG2}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{textTransform: "uppercase", fontSize: "16px", fontWeight: "bold", color: "#8ac642"}}>
          Graphics Design & Video Editing
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <center>  <Avatar alt="Remy Sharp" src={IMG17} /></center>
        <p style={{fontWeight: "bold", textTransform: "uppercase"}}> Sir Zeeshan Anis </p>
Graphic designer at Solution Plus, Graphic Design / Video Editing Teacher at BMJ Digital
        </Typography>
      </CardContent>
   
    </Card>
 </div>
 <div className="col">
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="210"
        image={IMG2}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{textTransform: "uppercase", fontSize: "16px", fontWeight: "bold", color: "#8ac642"}}>
        Graphics Design & Video Editing
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <center>  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/></center>
        <p style={{fontWeight: "bold", textTransform: "uppercase"}}> Sir Raheel </p>
        Graphic designer at Solution Plus, Graphic Design / Video Editing Teacher at BMJ Digital
        </Typography>
      </CardContent>
    </Card>
 </div>
  
 <div className="col">
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="210"
        image={IMG3}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{textTransform: "uppercase", fontSize: "16px", fontWeight: "bold", color: "#8ac642"}}>
          Artificial Intelligence
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <center>  <Avatar alt="Remy Sharp" src={IMG16} /></center>
        <p style={{fontWeight: "bold", textTransform: "uppercase"}}> Sir Muhammad Qasim </p>
        Artificial Intelligence Engineer (Teacher) at Saylani Welfare Mass Training & Job Creation Program
        Former Data scientist at UBL - United Bank Ltd
        </Typography>
      </CardContent>
   
    </Card>
 </div>

 <div className="col">
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="210"
        image={IMG4}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{textTransform: "uppercase", fontSize: "16px", fontWeight: "bold", color: "#8ac642"}}>
          Cisco CCNA
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <center>  <Avatar alt="Remy Sharp" src={IMG11} /></center>
        <p style={{fontWeight: "bold", textTransform: "uppercase"}}> Sir Muhammad Ali Mughal </p>
        Founder & Chairman at Jawan Pakistan and lecturer at Benazir Bhutto Shaheed University Lyari, Karachi
     Past: Saylani Welfare Mass Training & Job Creation Program 


        </Typography>
      </CardContent>
     
    </Card>
 </div>

 {/* <div className="col">
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="210"
        image={IMG1}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Web and Mobile Application
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <center>  <Avatar alt="Remy Sharp" src="/components/assests/cat-3.jpg" /></center>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
 </div> */}



</div>

</div>

</div>


<Footer/>
    
    </>
  )
}

export default Coureses