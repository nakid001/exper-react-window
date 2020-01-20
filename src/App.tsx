import React from 'react';
import './App.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import Dropdownwindows from './components/DropdownReact'
const options = [
  'one', 'two', 'three','asd', 'gg', 'hh','zxc', 'vv', 'qwe',

]
const defaultOption = options[0]

const App: React.FC = () => {
  return (
    <div className="App">
      <div id="simple-dd">
        <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
      </div>
      <div>dodo</div>
      <div id="react-dd">
        <Dropdownwindows
          options={options} />
      </div>
    </div>
  );
}

export default App;
