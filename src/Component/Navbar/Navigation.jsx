import React from 'react';
import{
    // BrowserRouter as Router, 
    Routes, 
    Route, 
    Link
}from 'react-dom';
import Home from '../Pages/Home';

 export default function Navigation(){
    return(
        <div className="navbar">
            
            <div className='Leftside'>
                <Link to="/home"> Home </Link>                
            </div>
            
            <Routes>
                <Route path="/home" exact element={<Home/>}/>                                           
                <Route  path="/" element={<Home/>}/>                    
            </Routes> 
        
         </div>
    )
   
}

