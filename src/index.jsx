import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.scss'
import App from './components/App/App'
import aviaStore from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={aviaStore}>
      <App />
    </Provider>
  </React.StrictMode>
)
