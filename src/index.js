import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ARTICLES_DATA } from "./Projects/ArticleSorting/constants";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App articles={ARTICLES_DATA}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();







// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Provider } from 'react-redux'
// import {store} from './Projects/TodoList/redux/store.js'

// createRoot(document.getElementById('root')).render(
//   <Provider store = {store}>
//     <App />
//   </Provider>
// )