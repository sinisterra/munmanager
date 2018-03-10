import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import '@material/typography/dist/mdc.typography.min.css'
import '@material/layout-grid/dist/mdc.layout-grid.min.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
