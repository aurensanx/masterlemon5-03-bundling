import * as React from 'react';

import "./hello.scss";


export class HelloComponent extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <h2 className="hello">Hello World Parcel!</h2>
    );
  }
}
