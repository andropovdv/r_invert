import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './bll/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addVendor, addCpu, addHdd, addSoket, addRam, changeNewVendors, changeNewFullVendors } from './bll/state'
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
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


rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
