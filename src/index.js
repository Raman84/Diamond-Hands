import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
var threshold   = 500,
    successFunc = function(){ console.log('It exists!'); };

var myXHR = $.ajax({
  url: $('#checkme').attr('href'),
  type: 'text',
  method: 'get',
  error: function() {
    console.log('file does not exist');
  },
  success: successFunc
});

setTimeout(function(){
  myXHR.abort();
  successFunc();
  
reportWebVitals();
