import Navbar from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import React,{useState} from "react";
import Alert from "./components/Alert"
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [modes,setModes]=useState('light');
  const[alert,setAlert]=useState('null');
  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert('null');
    }, 1500);
  }
  const toggleModes=()=>{
    if(modes==='light'){
    
        showalert("Dark mode enabled","success")
     
      setModes('dark');
   
    
    document.body.style.backgroundColor='#0b203e';
  }
    else {
     
        showalert("Light mode enabled","success")
      
      setModes('light');

    document.body.style.backgroundColor='white';
   
    
  }
  }
  return (

    <BrowserRouter>
    
    
    <Navbar title="TextUtils" modes = {modes} toggleModes = {toggleModes}/>
    <Alert  alert={alert} />
    <Routes>
      <Route path="/" element={<Form   label="Enter text below to analyse" modes={modes} showalert={showalert}/>}/>
      <Route path="/about" element={<About modes={modes}/>}/>
    </Routes> 
  
    </BrowserRouter>
  );
}

export default App;

