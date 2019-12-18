import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import { Store } from './components/context';

export default function App():JSX.Element{
   const store = React.useContext(Store)
   return (
    <div className="app">
     <Header />
      <Main />
    </div>
  );
}