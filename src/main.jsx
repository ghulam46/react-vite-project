import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ListArray from './rendering lists/ListArray.jsx'
import AppRl from '../src/rendering lists/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ListArray />
    {/* <AppRl /> */}
  </React.StrictMode>,
)
