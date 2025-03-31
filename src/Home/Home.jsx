// src/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/dbs_logo.svg'; // Adjust the path as necessary
// import

const Home = () => {
  return (
    <div className="home">
       <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="content">
        <h1>Welcome to the Chatbot Component Viewer</h1>
        <Link to="/visualizer">
          <button className="start-button">Start Visualizing</button>
        </Link>
      </div>
      
    </div>
    
  );
};

export default Home;