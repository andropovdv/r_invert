import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
// import Record from './componets/Record/Record';
import MBoardsContainer from './componets/MBoards/MBoardsContainer';
import CpusContainer from './componets/Cpus/CpusContainer';
import HddsContainer from './componets/Hdds/HddsContainer';
import RamsContainer from './componets/Rams/RamsContainer';
import UsersContainer from './componets/Users/UsersContainer';
import CpusContainerExp from './componets/CpusExpress/CpusContainerExp';
import RecordLContainer from './componets/Record/RecordLContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/record' render={() => <RecordLContainer/>} />
        <Route path='/mboards' render={() => <MBoardsContainer />} />
        <Route path='/rams' render={() => <RamsContainer />} />
        <Route path='/hdds' render={() => <HddsContainer />} />
        <Route path='/cpus' render={() => <CpusContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/cpussql' render={() => <CpusContainerExp />} />
      </div>
    </div>
  );
}

export default App;
