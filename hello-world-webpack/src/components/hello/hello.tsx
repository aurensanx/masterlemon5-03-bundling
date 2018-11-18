import * as React from 'react';


export class HelloComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <h2 className="hello">Hello World Webpack!</h2>
    );
  }
}
