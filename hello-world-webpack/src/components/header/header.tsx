import * as React from 'react';


export class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <header>
          <img src={require('./logo.png')} alt="Logo" title="Logo"/>
        </header>
      </div>

    );
  }
}
