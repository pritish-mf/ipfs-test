import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { VTBApiProvider } from './VTBApiProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VTBApiProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </VTBApiProvider>
  </React.StrictMode>,
)
