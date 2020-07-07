import React, { useState } from 'react';
import './App.css';
import Header from './components/header'
import Dropdown from './components/dropdown'



function App() {
  const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <div className="App">
      <Header
        setDropdownActive={setDropdownActive}
        dropdownActive={dropdownActive}
      />
      <Dropdown
        dropdownActive={dropdownActive}
      />
    </div>
  );
}

export default App;
