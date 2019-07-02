import React from 'react';
import Loader from './components/Loader';
import FirstName from './components/FirstName';
import LastName from './components/LastName';
import FullName from './components/FullName';
import Tasks from './components/Tasks';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Loader />
      <FirstName />
      <LastName />
      <FullName />
      <br />
      <Tasks />
    </div>
  );
};
export default App;
