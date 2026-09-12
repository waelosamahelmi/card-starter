import './style.css';

// The footer year updates itself, so the card never looks abandoned.
document.querySelector('#year').textContent = new Date().getFullYear();
