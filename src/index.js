import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LoginProvider from './components/auth/context';

import ToDo from './components/todo/todo';
import Header from './components/header/header';

import './site.scss';

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Header />
        <ToDo />
      </LoginProvider>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
