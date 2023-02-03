import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'; 

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Routes, Route} from 'react-router-dom';
import Registration from "./components/Registration";
import Course from "./components/Courses";


function App() {
  return (
    <div className="App">

   <Routes>
   
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Home' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Coureses' element={<Course/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Registration' element={<Registration/>}/>
   </Routes>



    </div>
  );
}

export default App;
