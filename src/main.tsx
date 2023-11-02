import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Auth0Provider}from '@auth0/auth0-react'
const domain = import.meta.env.AUTH0_DOMAIN;
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider 
    domain= 'dev-pyr8cpaizj7nnwvp.us.auth0.com'
    clientId='xHSyZqvZrhxlLjROzo1bQ3Qy8818KKAI'
    >
    <App />
    </Auth0Provider>

  </React.StrictMode>,
)
