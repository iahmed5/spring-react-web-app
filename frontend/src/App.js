import React from 'react';
import './App.css';
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo">Contacts</a>
        </div>
      </nav>
      <div className="row">
        <Contact/>
      </div>
    </div>
  );
}