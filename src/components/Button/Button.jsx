// src/components/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ label, onClick }) => (
    <button onClick={onClick}>{label}</button>
);

export default Button;