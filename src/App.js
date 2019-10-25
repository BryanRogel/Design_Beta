import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import CreateAccount from './pages/createAccount/CreateAccount';


function App() {
  return (
    <div className="App">
        <Header/>
        <CreateAccount/>
        <Footer/>
    </div>
  );
}

export default App;
