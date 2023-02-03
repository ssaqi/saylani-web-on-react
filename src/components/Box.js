import SchoolIcon from '@mui/icons-material/School';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar'
const SimpleContainer = () => {
    
return(
  <div className='container'>
   <br></br><br></br><br></br><br></br>
<div className="row row-cols-1 row-cols-md-4 g-2">
  
  <div className="col">
  <Card sx={{ maxWidth: 260 }}>
    
      <CardContent>
      <center ><SchoolIcon  style={{color: "#8ac642"}}/></center>
        <Typography variant="body2" color="text.secondary">
          <p style={{fontWeight: "bold", textTransform: "uppercase"}}> SKILLED INSTRUCTORS</p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </Typography>
      </CardContent>
      
    </Card>
  </div>
  <div className="col">
  <Card sx={{ maxWidth: 260 }}>
  
      <CardContent>
      <center><YouTubeIcon  style={{color: "#8ac642"}}/></center>
        <Typography variant="body2" color="text.secondary">
        <p style={{fontWeight: "bold", textTransform: "uppercase"}}> ONLINE TUTORIAL </p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  
      </Typography>
      </CardContent>
    
    </Card> 
  </div>
  <div className="col">
  <Card sx={{ maxWidth: 260 }}>
     
      <CardContent>
      <center><AddToHomeScreenIcon  style={{color: "#8ac642"}}/></center>
        <Typography variant="body2" color="text.secondary">
        <p style={{fontWeight: "bold", textTransform: "uppercase"}}>HOME PROJECTS </p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </Typography>
      </CardContent>
     
    </Card>
  </div>
  <br/>
  <div className="col">
  <Card sx={{ maxWidth: 260 }}>
  
      <CardContent>
      <center>< CastForEducationIcon  style={{color: "#8ac642"}}/></center>
        <Typography variant="body2" color="text.secondary">
        <p style={{fontWeight: "bold", textTransform: "uppercase"}}>HACKATHONS</p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </Typography>
      </CardContent>
  
    </Card>
    </div>
 </div>
 </div>





)


}


export default SimpleContainer;