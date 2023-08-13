import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Createair from './Pages/Createair';
import Listair from './Pages/Listair';
import Leaderboard from './Pages/Leaderboard';
import Antibot from './Pages/Antibot'
import Multisender from './Pages/Multisender';
import Prisale from './Pages/Prisale';
import Prilist from './Pages/Prilist';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create-air' element={<Createair/>}/>
          <Route path='/list-air' element={<Listair/>}/>
          <Route path='/leaderboard' element={<Leaderboard/>}/>
          <Route path='/anti-bot' element={<Antibot/>}/>
          <Route path='/multisender' element={<Multisender/>}/>
          <Route path='/private-sale' element={<Prisale/>}/> 
          <Route path='/private-list' element={<Prilist/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
