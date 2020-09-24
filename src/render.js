import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addVendor, addCpu, addHdd, addSoket, addRam, changeNewVendors, changeNewFullVendors } from './bll/state'
import { BrowserRouter } from 'react-router-dom';
export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
          addVendor={addVendor}
          addCpu={addCpu}
          addHdd={addHdd}
          addSoket={addSoket}
          addRam={addRam}
          changeNewVendor={changeNewVendors}
          changeNewFullVendors={changeNewFullVendors} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}