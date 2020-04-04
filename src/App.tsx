import React, { useState } from 'react';
import './App.css';
import { List } from './list/list';

function App() {
  const [listName, setListName] = useState('My List');

  return (
    <div className="App">
      <input value={listName} onChange={e => setListName(e.target.value)} />
      {listName ? <List name={listName} /> : null}
    </div>
  );
}

export default App;
