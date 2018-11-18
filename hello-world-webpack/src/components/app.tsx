import * as React from 'react';
import {HeaderComponent} from "./header/header";
import {HelloComponent} from "./hello/hello";

export class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderComponent/>
        <HelloComponent/>
      </div>
    );
  }
}