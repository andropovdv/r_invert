import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Record from './componets/Record/Record';
import Rams from './componets/Rams/Rams';
import Hdds from './componets/Hdds/Hdds';
import Cpus from './componets/Cpus/Cpus';
import MBoardsContainer from './componets/MBoards/MBoardsContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/record' render={() =>
          <Record store={props.store} />} />
        <Route path='/mboards' render={() =>
          <MBoardsContainer store={props.store} />} />
        <Route path='/rams' render={() =>
          <Rams state={props.state.ramPage} dispatch={props.dispatch} />} />
        <Route path='/hdds' render={() =>
          <Hdds state={props.state.hddPage} dispatch={props.dispatch} />} />
        <Route path='/cpus' render={() =>
          <Cpus state={props.state.cpuPage} dispatch={props.dispatch} />} />
      </div>
    </div>
  );
}

export default App;
