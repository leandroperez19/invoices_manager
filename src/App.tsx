import React from 'react';
import styled from 'styled-components';
import Header from './components/header';
import Navbar from './components/navbar';
import NoInvoicesMsg from './components/noInvoicesMsg';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Navbar />
      <div className="desktopWrapper">
        <Header invoices={null} />
        <NoInvoicesMsg />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    .desktopWrapper{
      padding: 0 10px;
      width: 100%;
    }
  }

`

export default App;
