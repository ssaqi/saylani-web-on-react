import { AppBar, Tabs, Toolbar, Typography,Tab,Button } from "@mui/material";
import React, { useState } from "react";



const Navbar =() =>{

 const [value, setvalue] =useState();

return(

    <React.Fragment>
     <AppBar sx={{backgroundColor: '#FAFAFA'}}>
      <Toolbar>
        <Typography sx={{marginLeft: '10px', color: '#39e75f' }} >MUI</Typography>
        <Tabs sx={{margin: 'auto'}} textColor="primary" value={value}
         onChange={(e, value)=> setvalue(value)}
         indicatorColor="primary"
         >
             <Tab label="Home"/>
             <Tab label="About Us"/>  
             <Tab label="Admission "/>
             <Tab label="Courses"/>
             <Tab label="Contact us"/>
        </Tabs>

        <Button  variant="contained">Registration Now</Button>
        <Button sx={{margin: '10px'}} variant="contained">Verification</Button>
        </Toolbar>
     </AppBar>
    </React.Fragment>


)

}

export default Navbar;