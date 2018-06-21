import * as React from 'react';
import { handleErrors, sortMovies } from '../utils';

import Header  from './Header/Header';
import Results from './Results/Results';

import '../index.css';

class App extends React.Component {

  state = {
    viewStyle  : 'table',
    filterTerm : '',
    movies     : [],
    error      : undefined
  };

  handleInputChange = (event) => {
    this.setState({ filterTerm: event.target.value });
  }

  handleOptionChange = (event) => {
    this.setState({ viewStyle: event.target.value });
  }

  componentDidMount() {
    const apiEndpoint = 'http://localhost:3000/api/movies/search';
    fetch(`${apiEndpoint}/?title=guardians`)
      .then(handleErrors)
      .then(response => response.json())
      .then(({ Search }) => this.setState({ movies : sortMovies(Search) }))
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <div>
        <Header
          viewStyle={ this.state.viewStyle }
          filterTerm={ this.state.filterTerm }
          onOptionChange={ this.handleOptionChange }
          onInputChange={ this.handleInputChange }
        />
        {
          !!this.state.movies.length &&
          <Results
            viewStyle={ this.state.viewStyle }
            error={ this.state.error }
            filterTerm={ this.state.filterTerm }
            movies={ this.state.movies } />
        }
      </div>
    );
  }
}

export default App;
