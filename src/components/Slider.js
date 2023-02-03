import React from 'react';
import '../components/Slider.css'
import IMG1 from './assests/setting.jpg';
const Slider = () => (
 <>
 <div className='container-fluid bg-light'>
 <img src={IMG1} className="card-img" alt="..."/>
  <div className="card-img-overlay my-5">
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
  <div className='container'>
    <h1 className="card-title text-start my-5"></h1>
    <h1 className="card-text text-start  m2">Saylani Mass <br/> <span style={{color: "#000"}}>IT Training</span></h1>
    <p className="card-text text-start">
        <p className='offer'>we are offering Courses</p>
        <small>
        <div className="wrapper">
        <ul className="dynamic-txts text-start">
      <li><span>Web & Mobile App</span></li>
      <li><span>Graphics Design</span></li>
      <li><span>Web Development</span></li>
      <li><span>Networking CCNA</span></li>
      <li><span>Amazon Marketing </span></li>

    </ul>
    </div>
   
        </small>
  
        </p>

  </div>

  </div>
</div>

 </>
);
export default Slider;