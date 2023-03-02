import React from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Header invoices={null} />
    </div>
  );
}

export default App;
