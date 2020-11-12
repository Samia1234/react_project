import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Navbar from './component/Navbar';
import Main from './component/Main';
import Services from './component/Services';
import About from './component/About';

function App() {
  return (
    <div >
           <Navbar/>  
           <Main/>
           <Services/>
           <About/>
    </div>
  );
}

export default App;
