import React from 'react'; // Import react in every file using react
import ReactDOM from 'react-dom'; // Import the DOM in the entry.jsx file

// Import all other files here
import ClickCounter from './components/click_counter';


// This must be in EVERY javascript app, it is the only js file that our website
// actually sees
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<ClickCounter />, root);
    // We are rendering the ClickCounter class to the DOM through the element
    // with an ID of 'root'
});
