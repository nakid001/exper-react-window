import React from 'react';
import './App.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Route } from 'react-router-dom'

import NormalList from './components/NormalList'
import ReactWindowList from './components/ReactWindowList'
import Home from './components/Home'

function generateOption(): any {
  let options = []
  for (let i = 0; i < 1000000; i++) {
    options.push('Options ' + (i + 1))
  }
  return options
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/normal" component={NormalList} />
      <Route path="/react-window" component={Home} />
</div>
  );
}

export default App;
