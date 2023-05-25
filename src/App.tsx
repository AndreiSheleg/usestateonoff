import React from 'react';
import logo from './logo.svg';
import './App.css';
import {OnOff} from './components/OnOff/OnOff';

function App(props: any) {
    console.log('APP RENDERING')
  return (
    <div>
      <OnOff/>
{/*      <OnOff  />
      <OnOff />*/}
    </div>
  );
}

export default App;
