// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './Home';
import Contact from './Contact';
import {BrowserRouter, Link} from 'react-router'
import RoutesXYZ from './Routes';

function App()  {
   const[component , setComponenet] = useState(Home)


  return (
    <BrowserRouter>
    <RoutesXYZ/>
    <Link to="/Home">HomeXYZ</Link>
    <Link to="/Contact">ContactXYZ</Link>
   
    <div className="App">
     {/* <nav>
      <ul>
        <li onClick={()=>{setComponenet(Home)}}>Home</li>
        <li onClick={()=>{setComponenet(contact)}}>contact</li>
      </ul>
     </nav>
     {component === "Home"?<Home/>:<contact/>} */}
     
    </div>
    </BrowserRouter>
  )
  }


export default App;
