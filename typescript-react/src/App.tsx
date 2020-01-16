import React from 'react';
import Greetings from './Greetings'

const App: React.FC = () => {
  const onclick = (name: string) => {
    console.log(`${name} hi`)
  }
  return (
    <div className="App">
      <Greetings name='hh' onclick={onclick}/>
    </div>
  );
}

export default App;
