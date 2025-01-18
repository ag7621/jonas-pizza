import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  return (
    <footer>{new Date().toLocaleTimeString()} We're currently open! :D</footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="/assets/spinaci.bmp" alt="" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinich, and ricotta cheese</p>
    </div>
  );
}

export default App;
