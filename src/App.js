import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './Modules/Home';
import SignUp from './Modules/SignUp';
import SignIn from './Modules/SignIn';
import Dashboard from './Modules/Dashboard';
import AddProperty from './Modules/AddProperty';

const App = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/addProperty" element={<AddProperty/>} />
      </Routes>
  );
};

export default App;
