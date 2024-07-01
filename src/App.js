import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React,{ useState } from 'react';
{/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";*/}


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },2000)
}

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='Textutils-dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled","success");
      document.title='Textutils-light mode';
    }
  }
  return (
    <>
   {/*<Navbar title="Title" aboutText="About TextUtils"/>*/}
   
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Textform showAlert={showAlert} heading="Enter the Text to analyze"  mode={mode} />
        </div>
 {/*  <About/>*/}
   
   </>
  );
}

export default App;
