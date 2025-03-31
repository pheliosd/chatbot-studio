// src/ComponentViewer.jsx
import React from 'react';
import Button from './components/Button/Button.jsx';

const components = {
    Button: <Button label="Click me" onClick={() => alert('Button clicked!')} />,
};

const ComponentViewer = ({ componentName }) => {
    const Component = components[componentName];
    return (
        <div>
            <h1>{componentName}</h1>
            {Component}
        </div>
    );
};

export default ComponentViewer;