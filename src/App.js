import React from 'react';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Jarot" />
      {/* <CounterExample /> */}
    </div>
  );
}

export default App;
