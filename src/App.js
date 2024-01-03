import React, { useState } from 'react'
import './App.css';

function App() {


  const [value, setvalue] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div class="mainbody flex w-2 h-6 bg-red-600 ">
          <div class="Header">
            Calculator
          </div>

          <div class="ResultAre text-red-500 ">
            <input type="text" value={value} />
          </div>
          <div class="buttonsare">
            <ul>
              <li><input type="button" value="AC" onClick={e => setvalue('')} /></li>
              <li><input type="button" value="DE" onClick={e => setvalue(value.substring(0, value.length - 1))} /></li>
              <li><input type="button" value="%" onClick={e => setvalue(value + e.target.value)} /></li>
              <li> <input type="button" value="/" onClick={e => setvalue(value + e.target.value)} /> </li>
            </ul>
            <ul>
              <li><input type="button" value="7" onClick={e => setvalue(value + e.target.value)} /></li>
              <li><input type="button" value="8" onClick={e => setvalue(value + e.target.value)} /></li>
              <li><input type="button" value="9" onClick={e => setvalue(value + e.target.value)} /></li>
              <li><input type="button" value="*" onClick={e => setvalue(value + e.target.value)} /></li>
            </ul>
            <ul>
              <li><input type="button" value="4" onClick={e => setvalue(value + e.target.value)} /></li>
              <li><input type="button" value="5" onClick={e => setvalue(value + e.target.value)} /></li>
              <li><input type="button" value="6" onClick={e => setvalue(value + e.target.value)} /></li>
              <li><input type="button" value="-" onClick={e => setvalue(value + e.target.value)} /></li>
            </ul>
            <ul>
              <li><input type="button" value="1" onClick={e => setvalue(value + e.target.value)} /></li>
              <li><input type="button" value="2" onClick={e => setvalue(value + e.target.value)} /></li>
              <li><input type="button" value="3" onClick={e => setvalue(value + e.target.value)} /></li>
              <li><input type="button" value="+" onClick={e => setvalue(value + e.target.value)} /></li>
            </ul>
            <ul>
              <li><input type="button" value="." onClick={e => setvalue(value + e.target.value)} /></li>
              <li><input type="button" value="0" onClick={e => setvalue(value + e.target.value)} /></li>
              <li><input type="button" value="=" class="Equal" onClick={e => setvalue(eval(value))} /></li>
            </ul>
          </div>
        </div>
      </header>d
    </div>
  );
}

export default App;
