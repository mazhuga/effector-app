import React from 'react';
import FirstName from './components/FirstName';
import LastName from './components/LastName';
import FullName from './components/FullName';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <FirstName />
      <LastName />
      <FullName />
    </div>
  );
};
export default App;
