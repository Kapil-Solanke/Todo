import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import SelectState from './context/selectState';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <SelectState>
    <BrowserRouter>
        <App />
      </BrowserRouter>
  </SelectState>
  </React.StrictMode>
);

