import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Provider  store={store}>  
    <App/>
  </Provider>

);



