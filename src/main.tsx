import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Auth0Provider}from '@auth0/auth0-react'
import { ApolloProvider } from '@apollo/client';
import client from './graphql/apollo-client.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ApolloProvider client={client}>    
    <Auth0Provider   
    domain= 'dev-pyr8cpaizj7nnwvp.us.auth0.com'
    clientId='PgvzYMDkR86z6s5VP1AaSRBy7G41O7hj'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    >
    <App />
    </Auth0Provider>
    </ApolloProvider>
  </React.StrictMode>,
)
