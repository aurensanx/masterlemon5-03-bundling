import * as React from 'react';
import "./header.scss";
import logo from "./logo.png";


export class HeaderComponent extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
        <header>
          <img src={logo} alt="Logo" title="Logo"/>
        </header>

    );
  }
}
