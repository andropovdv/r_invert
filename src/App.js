import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Record from './componets/Record/Record';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Record />
    </div>
  );
}

export default App;
