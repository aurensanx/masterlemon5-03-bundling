import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppComponent} from "./components/app";

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}


//
console.log(`API_URL: ${process.env.API_URL}` );


ReactDOM.render(
  <AppComponent/>,
  document.getElementById('root')
);


