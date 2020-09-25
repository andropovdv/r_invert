import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './bll/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
          addVendor={store.addVendor.bind(store)}
          addCpu={store.addCpu.bind(store)}
          addHdd={store.addHdd.bind(store)}
          addSoket={store.addSoket.bind(store)}
          addRam={store.addRam.bind(store)}
          changeNewVendor={store.changeNewVendors.bind(store)}
          changeNewFullVendors={store.changeNewFullVendors.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
