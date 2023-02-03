import IMG from './assests/abiu2.jpg'
import Typography from '@mui/material/Typography';
function News(){
    return(
<>
<br/><br/><br/><br/>
<div className='container'>
<div className="container back">
<div className="row featurette">
  <div className="col-md-7 order-md-2">
    <h2 className="featurette-heading fw-normal lh-1">
      <br/>
      <Typography variant="h5" gutterBottom>
      <p className="text-start p">About Admissions <span className="line"> Updates </span></p>
      {/* <p className="text-start h">Welcome To Saylani Mass IT Training </p> */}
      <p className="text-start" style={{fontSize: "18px",fontFamily: "inherit"}}>
        Web and Mobile Application are coming soon we will announced on our facebook page asa well as here
        stay connected with Saylani Mass IT Training.
     </p>
      </Typography>

    </h2>
  </div>
  <div className="col-md-5 order-md-1" >
    <img src={IMG} 
      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
      width={500}
      height={500}
      
    />
</div>
</div></div>
</div>
</>
)
}

export default News;