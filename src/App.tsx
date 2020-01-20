import React from 'react';
import './App.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import NormalList from './components/NormalList'
import ReactWindowList from './components/ReactWindowList'


function generateOption(): any {
  let options = []
  for (let i = 0; i < 100000; i++) {
    options.push('Options ', i + 1)
  }
  return options
}

const App: React.FC = () => {
  return (
    <div className="App">
      <div id="simple-dd" style={{ height: "200px", width: "100%", overflow: "scroll" }}>
        {/* <NormalList options={generateOption()} /> */}
      </div>
      <br />
      <br />
      <br />
      <div>dodo</div>
      <br />
      <br />
      <br />
      <div id="react-dd" style={{ height: 1000, width: "100%" }}>
        <ReactWindowList  options={generateOption()} />
      </div>
    </div>
  );
}

export default App;
