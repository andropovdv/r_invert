import React from 'react';
import { Route } from 'react-router-dom';
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
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/record' render={() =>
          <Record vendorPage={props.state.vendorPage}
          dispatch={props.dispatch} />} />
        <Route path='/mboards' render={() =>
          <MBoards state={props.state.mboardPage} addSoket={props.addSoket} />} />
        <Route path='/rams' render={() =>
          <Rams rams={props.state.ramPage.rams} addRam={props.addRam} />} />
        <Route path='/hdds' render={() =>
          <Hdds hdds={props.state.hddPage.hdds} addHdd={props.addHdd} />} />
        <Route path='/cpus' render={() =>
          <Cpus cpusData={props.state.cpuPage.cpusData} dispatch={props.dispatch}
          typingVendor={props.state.cpuPage.typingVendor} typingModel={props.state.cpuPage.typingModel} />} />
      </div>
    </div>
  );
}

export default App;
