// src/App.jsx
          import React from 'react';
          import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
          import Home from './Home/Home';
          import ComponentViewer from './ComponentViewer';
          import Visualizer from './Visualizer/Visualizer';

          function App() {
            return (
              <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/visualizer" element={<Visualizer />} />

                    <Route path="/component/:componentName" element={<ComponentViewer />} />
                </Routes>
              </Router>
            );
          }

          export default App;