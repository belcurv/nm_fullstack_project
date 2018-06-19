import * as React from 'react';
import Header from './Header/Header';

import '../index.css';

class App extends React.Component {

  state = {
    searchTerm : undefined
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.searchTerm);
    this.setState({ searchTerm: undefined });
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div>
        <Header
          onInputChange={this.handleChange}
          onSearchSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
