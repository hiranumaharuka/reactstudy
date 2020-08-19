import React from 'react';
import HelloWorld from '../Components/HelloWorld';

function Home(props) {
  return (
    <div>
      <h1 className="font-bold text-2xl">This is the home page.</h1>
      <HelloWorld name="Jarot" />
    </div>
  );
}

export default Home;