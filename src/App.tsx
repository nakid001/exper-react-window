import React from 'react';
import './App.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import NormalList from './components/NormalList'
import ReactWindowList from './components/ReactWindowList'

const options = [
  'one', 'two', 'three', 'asd', 'gg', 'hh', 'zxc', 'vv', 'qwe',
]


function generateOption():any  {
  let options = []
  for (let i =0;i<1000;i++) {
    options.push('Options ', i+1)
  }
  return options
}

const App: React.FC = () => {
  return (
    <div className="App">
      <div id="simple-dd" >
        {/* <NormalList options={generateOption()} /> */}
      </div>
      <br/>
      <br/>
      <br/>
      <div>dodo</div>
      <br/>
      <br/>
      <br/>
      <div id="react-dd">
        <ReactWindowList options={generateOption()} />
      </div>
    </div>
  );
}

export default App;
