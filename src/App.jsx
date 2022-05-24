// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './style/Navbar.css'
import Navigation from './Component/Navbar/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    

      <div className="App">
        <Router>
           <Navigation/>
        </Router>
         
        
     </div>
    
    
  );
}

export default App;
