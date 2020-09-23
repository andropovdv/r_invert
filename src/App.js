import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './componets/Header/Header';
import MBoards from './componets/MBoards/MBoards';
import Navbar from './componets/Navbar/Navbar';
import Record from './componets/Record/Record';
import Rams from './componets/Rams/Rams';
import Hdds from './componets/Hdds/Hdds';
import Cpus from './componets/Cpus/Cpus';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/record' render={ () => <Record vendors={props.vendors}/>}/>
          <Route path='/mboards' render={ () => <MBoards mboards={props.mboards} sokets={props.sokets}/>} />
          <Route path='/rams' component={Rams} />
          <Route path='/hdds' render={ () => <Hdds hdds={props.hdds}/>} />
          <Route path='/cpus' render={ () => <Cpus cpusData={props.cpusData}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
