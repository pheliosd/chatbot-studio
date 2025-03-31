import React, { useEffect, useState } from 'react';
import './Visualizer.css';
import logo from '../assets/dbs_logo.svg'; // Adjust the path to your logo file
import mockNavItems from '../mockData/mockData'; // Import the mock data
import {  useNavigate } from 'react-router-dom';

const Visualizer = () => {
  const [navItems, setNavItems] = useState([]); // State to store navigation items
  const [loading, setLoading] = useState(true); // State to handle loading
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Simulate fetching navigation items from the backend API
    const fetchNavItems = async () => {
      try {
        setLoading(true);
        setTimeout(() => {
          setNavItems(mockNavItems); // Use mock data
          setLoading(false); // Set loading to false
        }, 1000); // Simulate a 1-second delay
      } catch (error) {
        console.error('Error fetching navigation items:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchNavItems();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="visualizer">
      <div className="header">
        <img src={logo} alt="Logo" className="header-logo" onClick={() => navigate('/') } style={{cursor: 'pointer'}} />
        <h4>Chatbot Visualizer</h4>
      </div>
      <div className="main">
        <div className="nav-panel">
          <ul>
            {loading ? (
              <div className="spinner"></div> // Show spinner while loading
            ) : (
              navItems.map((item, index) => (
                <li key={index}>{item.name}</li> // Render each item dynamically
              ))
            )}
          </ul>
        </div>
        <div className="content">
          <div className="inner-header">
            <h4>Inner Header</h4>
          </div>
          <div className="content-body">
            <p>This is where you can visualize chatbot components.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;