
import React , { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router , 
  Route,
  Routes,
  
}  from "react-router-dom";


function App() {
    const [mode , setMode] = useState('light');

    const [alert , setAlert] = useState(null);

    const showAlert = (message , type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000);
    }

    const toggleMode = ()=>{
      if(mode ==='light')
      {
        setMode('dark')
        document.body.style.backgroundColor = "#042743"
        document.body.style.color = "white"
        showAlert("Dark Mode has Enabled", "Success");
      }
      else
      {
        setMode('light')
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        showAlert("Light Mode has Enabled" , "Success");
      }
    }
    
    const red = ()=>{
      setMode('danger')
      document.body.style.backgroundColor = "red"
      document.body.style.color = "white"
    }
    const green = ()=>{
      setMode('success')
      document.body.style.backgroundColor = "green"
      document.body.style.color = "white"
    }
    const grey= ()=>{
      setMode('warning')
      document.body.style.backgroundColor = "grey"
      document.body.style.color = "black"
    }
  return (
  <>
    <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  red={red} grey={grey} green={green} about="About"/>
    <Alert alert={alert}/>
   <div className='container my-3'>
    <Routes>
        <Route path="/about" element ={<About mode={mode}/>} />
       <Route path="/" element = { <TextForm showAlert={showAlert} heading="Enter text to analyze"/>} /> 
         </Routes>
   </div> 
    </Router>
   
 
   </>
  );
}

export default App;
