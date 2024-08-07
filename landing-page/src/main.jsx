import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CardItemContextProvider from './context/CardItemContext.jsx'
import RemoveCardItemContextProvider from './context/RemoveCardItemContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RemoveCardItemContextProvider>
   <CardItemContextProvider>
    <App />
    </CardItemContextProvider>
   </RemoveCardItemContextProvider>
  </React.StrictMode>,
)
