import './App.css';
import Header from './components/classCom/Header';
import { useState } from 'react';

function App() {

  const [variable, kuch] = useState({
    post: 'IT',
    duration: '3 months',
    input: ''
  })



  return (
    <div className="App">
      <header className="App-header">
        <input type="text" name="post" onChange={(e) => kuch({ post: e.target.value, input: e })} />
        <input type="text" name="duration" onChange={(e) => kuch({ duration: e.target.value, input: e })} />

        <Header attri_props={variable.input}/>
      </header>
    </div>
  );
}

export default App;
