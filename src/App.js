import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {

  return (
    // Main router that allowas the router to connect and work
    <BrowserRouter>
      <div className="App">
        {/*MAke sure there's only ONE route that show up at a time.*/}
        <Routes>
          <Route path='/' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
