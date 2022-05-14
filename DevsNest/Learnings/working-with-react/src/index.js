import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from "./Components/F_FsDB/App"
import App from './Components/F_auth/Pages/App/App';
// import Heading from './Components/F_DB/Heading';
// import Structure from './Components/F_DB/LSstructure';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Heading /> */}
    <App />
    {/* <Structure /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
