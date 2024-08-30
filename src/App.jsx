import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Page from './Pages/Page';

function App() {
  return (
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  );
}

export default App;