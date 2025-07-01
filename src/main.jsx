import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import { MovieProvider } from './contexts/MovieContext'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/react-movie-app">
      <MovieProvider>
        <App />
      </MovieProvider>
    </BrowserRouter>
  </StrictMode>
);