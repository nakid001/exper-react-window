import React from 'react';
import './App.css';
import 'react-dropdown/style.css'
import { Route } from 'react-router-dom'

import NormalList from './components/NormalList'
import NormalListBroken from './components/NormalListBroken'
import ReactWindowRow from './components/row/react-window-row-page'
import ReactWindowColumn from './components/column/react-window-column'
import ReactWindowGrid from './components/grid/react-window-grid'
import ReactWindowInfinite from './components/row/react-window-infinite-page'

import Home from './components/Home'

const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/normal" component={NormalList} />
      <Route path="/normal-broken" component={NormalListBroken} />
      <Route path="/react-window" component={ReactWindowRow} />
      <Route path="/react-window-column" component={ReactWindowColumn} />
      <Route path="/react-window-grid" component={ReactWindowGrid} />
      <Route path="/react-window-infinite" component={ReactWindowInfinite} />
</div>
  );
}

export default App;
