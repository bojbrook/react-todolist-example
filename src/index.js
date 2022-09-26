import ReactDOM from 'react-dom/client'
import dotenv from 'dotenv'

import './index.css'
import App from './App'
dotenv.config()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
