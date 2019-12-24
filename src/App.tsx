import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';


export default function App():JSX.Element{
   return (
    <div className="app">
     <Header />
      <Main />
    </div>
  );
}