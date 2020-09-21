import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import MBoard from './componets/MBoards/MBoards';
import Navbar from './componets/Navbar/Navbar';
//import Record from './componets/Record/Record';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        {/* <Record /> */}
        <MBoard />
      </div>
    </div>
  );
}

export default App;
