import React, { useState } from 'react'
import Footer from './footer';
import ResponsiveAppBar from './Header';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
const Contact = ()=> {
   const[used, setused] =useState({
   
    name:"",
    lname:"",
    email:"",
    subject:"",
    massage:"",

   });


   let name, value;
  const getuserData = (event) =>{
  name = event.target.name;
  value = event.target.value;

  setused({...used, [name]: value})
  

};

const postData = async(e) =>{
  const {name,lname,email,subject,massage} = used;
  if(name && lname && email && subject && massage){

    const res = await fetch(
      "https://react-contact-form-4913b-default-rtdb.firebaseio.com/reactform.json",
      {
          method:"POST",
          headers: {
              "Content-Type":"application/json"
               },
          body:JSON.stringify({
              name,
              lname,
              email,
              subject,
              massage,
  
          })          
      }
      );
    
       
      if(res){
        setused({
          name:"",
          lname:"",
          email:"",
          subject:"",
          massage:"",
        });
  
        alert("Form Submit Successfullly");
  
      }
  }else{
    alert("Please Fill all fields")
  }

 



}


  return (
  <>
   <ResponsiveAppBar/>
   <>
  <div className="px-4 py-5  text-center">
    <h1
      className="display-3 fw-bold text-dark text-uppercase"
      style={{ fontSize: 35 }}
    >
      Contact <span style={{ color: "#8ac642" }}>Us</span>
    </h1>
    <center>
      <div className="line2" />
    </center>
  </div>
  <div className="container">
    <div className="album py-2">
      <div className="container-fluid">
        <form action="#" method="POST">
          <div className="contact-grids1 w3agile-6">
            <div className="row">
              <div className="col-md-6 col-sm-6 contact-form1 form-group">
                <label className="col-form-label text-dark">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name='name'
                  autoComplete='off'
                  value={used.name}
                  onChange={getuserData}
                />
              </div>
              <div className="col-md-6 col-sm-6 contact-form1 form-group">
                <label className="col-form-label text-dark">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name='lname'
                  autoComplete='off'
                  value={used.lname}
                  onChange={getuserData}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 contact-form1 form-group">
                <label className="col-form-label text-dark">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name='subject'
                  autoComplete='off'
                  value={used.subject}
                  onChange={getuserData}
                />
              </div>
              <div className="col-md-6 col-sm-6 contact-form1 form-group">
                <label className="col-form-label text-dark">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  autoComplete='off'
                  value={used.email}
                  onChange={getuserData}
                />
              </div>
            </div>
            <div className="contact-me animated wow slideInUp form-group">
              <label className="col-form-label text-dark">Message</label>
              <input
                  type="text"
                  className="form-control m1"
                  placeholder="Massage"
                  name="massage"
                  autoComplete='off'
                  value={used.massage}
                  onChange={getuserData}
                />
            </div>
            <br />
            <div className="contact-form">
            <Button variant="contained" endIcon={<SendIcon />} onClick={postData}> Sent</Button>
            </div>
          </div>
        </form>



  
     
      </div>
    </div>
  </div>
  <br></br>
<div className='row g-4 py-5 row-cols-1 row-cols-lg-3 main1'>

<div className='feature col'>
  <p>{<LocalPhoneIcon style={{color: "#8ac642",}}/>}</p>
  <h1 className='f'>Phone</h1>
  <p>+92 324 3258388</p>
</div>

<div className='feature col'>
  <p>{<EmailIcon style={{color: "#8ac642",}}/>}</p>
<h1 className='f'>email</h1>
  <p>Saylanimassitinfo@gmail.com</p>
</div>


<div className='feature col'>
  <p>{<PlaceIcon style={{color: "#8ac642",}}/>}</p>
<h1 className='f'>Location</h1>
  <p>Gulshan Main Chorangi<br/> Mumtaz Mobile Mall Karachi</p>
</div>

</div>

  
</>
<Footer/>
  </>
    
 
  )
}

export default Contact