import React from 'react';
import Home from './Home';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';


function App() {  
  return (
    <div className="flex flex-col h-screen">
      <Toaster position='top-center' />
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login} />
          <Route path='/dashboard' Component={Home} />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
