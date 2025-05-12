import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client"

import './index.css'
import App from './Todos.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
