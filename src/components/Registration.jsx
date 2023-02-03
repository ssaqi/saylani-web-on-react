import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import ResponsiveAppBar from './Header';
import { useState } from 'react';
import Footer from './footer';


const Form = () =>{
const[user, setuser] = useState({
    name:"",
    lname:"",
    email:"",
    address:"",
    phone:"",
    gender:"",
    pic:"",
    course:"",
    cnic:"",

});

let name, value;
  const getuserData = (event) =>{
  name = event.target.name;
  value = event.target.value;

  setuser({...user, [name]: value})
  

};


const postData = async (e) =>{
   e.preventDefault();

 const {name,lname,email,address,phone,gender,pic,course,cnic} = user;
 if(name && lname && email && address && phone && gender && pic && course && cnic){

    const res = await fetch(
        "https://react-registration-from-default-rtdb.firebaseio.com/reactformdata.json",
        {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
                 },
            body:JSON.stringify({
                name,
                lname,
                email,
                address,
                phone,
                gender,
                pic,
                course,
                cnic,
    
            })          
        }
        );
    
        if(res){
          setuser({
            name:"",
            lname:"",
            email:"",
            address:"",
            phone:"",
            gender:"",
            pic:"",
            course:"",
            cnic:"",
          });
    
          alert("Form Submit Successfullly");
    
        }

 }else{
      alert("Please Fill All Data")
 }




};

  return(

<>
<ResponsiveAppBar/>
<div className="container ">
    <div className="row">
  
        <br></br><br></br>
        <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="card-body">
            <br></br><br></br>
        <h1
      className="display-3 fw-bold text-dark text-uppercase"
      style={{ fontSize: 35 }}
    >
      Registration <span style={{ color: "#8ac642" }}>Form</span>
    </h1>
                <form method='POST' >
                    <div className="form-group">
                        <label>Full Name:</label>
                        <input type="text"
                        className="form-control"
                        placeholder="Enter First Name" 
                        name='name'
                        autoComplete='off'
                        value={user.name}
                        onChange={getuserData}
                        />
                    </div>
                    <div className="form-group">
                        <label>Father Name:</label>
                        <input type="text"
                        className="form-control"
                        placeholder="Enter Father Name"
                        name='lname'
                        autoComplete='off'
                        value={user.lname}
                        onChange={getuserData}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" 
                        className="form-control"
                        placeholder="Enter Email"
                        name='email' 
                        autoComplete='off'
                        value={user.email}
                        onChange={getuserData}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input type="text" 
                        className="form-control"
                        placeholder="Enter Address" 
                        name='address'
                        autoComplete='off'
                        value={user.address}
                        onChange={getuserData}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone Number"
                        name='phone' 
                        autoComplete='off'
                        value={user.phone}
                        onChange={getuserData}
                        
                        />
                    </div>

                    <div className="form-group">
                        <label>Gender:</label>
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter Gender"
                        name='gender' 
                        autoComplete='off'
                        value={user.gender}
                        onChange={getuserData}
                        
                        />
                    </div>
                    <div className="form-group">
                        <label>Course:</label>
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter Course"
                        name='course' 
                        autoComplete='off'
                        value={user.course}
                        onChange={getuserData}
                        
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Cnic No:</label>
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter Cnic No"
                        name='cnic' 
                        autoComplete='off'
                        value={user.cnic}
                        onChange={getuserData}
                        
                        />
                    </div>


                    <label>Upload Picture</label>
                    <br/>
                    <Stack direction="row" alignItems="center" spacing={2}>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" 
        
                       name='pic' 
                        autoComplete='off'
                        value={user.pic}
                        onChange={getuserData}
                        
        
        />
        <PhotoCamera />
      </IconButton>
    </Stack>

                    <br></br>
                    <br></br>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={postData}> Submit</Button>
                </form>
            </div>
        </div>
    </div>
</div>
<br></br>
<br></br>
<br></br>

<Footer/>

</>

  )


  }
export default Form;