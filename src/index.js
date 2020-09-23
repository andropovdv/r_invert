import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let vendors = [
  { id: 1, name: 'Asus', fullName: 'AsusTek Computer Inc.' },
  { id: 2, name: 'Acer', fullName: 'Acer' }
]

let cpusData = [
  { id: '1', vendor: 'AMD', model: 'Ryzen 5 2600' },
  { id: '2', vendor: 'INTEL', model: 'Core i5 9400F' },
  { id: '3', vendor: 'AMD', model: 'Ryzen 7 2700' },
  { id: '4', vendor: 'AMD', model: 'Ryzen 5 3600' },
  { id: '5', vendor: 'AMD', model: 'A8 9600' },
  { id: '6', vendor: 'INTEL', model: 'Core i3 9100F' }
]

let mboards = [
  { id: 1, vendor: 'ASUS', model: 'ROG STRIX B360-F GAMING' },
  { id: 2, vendor: 'ASUS', model: 'PRIME B365M-A' },
  { id: 3, vendor: 'ASUS', model: 'PRIME B360M-K' },
  { id: 4, vendor: 'ASUS', model: 'TUF B450-PRO GAMING' },
  { id: 5, vendor: 'ASUS', model: 'TUF B450M-PRO GAMING' },
  { id: 6, vendor: 'GIGABYTE', model: 'B450M DS3H' }
]

let sokets = [
  { id: 1, soket: 'LGA 1700' },
  { id: 2, soket: 'LGA 1200' },
  { id: 3, soket: 'Socket R4 (LGA 2066)' },
  { id: 4, soket: 'Socket H4 (LGA 1151)' }
]

let hdds = [
  { id: '1', vendor: 'WD', model: 'Caviar Blue WD10EZEX' },
  { id: '2', vendor: 'TOSHIBA', model: 'P300 HDWD110UZSVA' },
  { id: '3', vendor: 'SEAGATE', model: 'Barracuda ST1000DM010' },
  { id: '4', vendor: 'SEAGATE', model: 'Barracuda ST2000DM008' },
  { id: '5', vendor: 'WD', model: 'Blue WD10EZRZ' },
  { id: '6', vendor: 'WD', model: 'Blue WD20EZAZ' },
]

ReactDOM.render(
  <React.StrictMode>
    <App vendors={vendors} cpusData={cpusData} mboards={mboards} sokets={sokets} hdds={hdds}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
