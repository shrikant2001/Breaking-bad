import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <nav id="title">
        <Link to="/" className='display-6 fw-bold'> <span className='element'>Br</span>eaking <span className='element'>Ba</span>d </Link>
      </nav>
      <nav>
        <Link to="/Search" className='goTo h3'> Discover Characters </Link>
      </nav>
      <nav>
        <Link to="/Quotes" className='goTo h3'> Popular Quotes </Link>
      </nav>
    </div>
  )
}
