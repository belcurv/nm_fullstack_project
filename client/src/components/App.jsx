import * as React from 'react';
import { handleErrors, sortMovies } from '../utils';

import Header  from './Header/Header';
import Results from './Results/Results';

import '../index.css';

class App extends React.Component {

  state = {
    filterTerm : '',
    movies     : [],
    error      : undefined
  };

  handleChange = (event) => {
    this.setState({ filterTerm: event.target.value });
  }

  componentDidMount() {
    const apiEndpoint = '/api/movies/search';
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
          filterTerm={ this.state.filterTerm }
          onInputChange={ this.handleChange }
        />
        {
          !!this.state.movies.length &&
          <Results
            error={ this.state.error }
            filterTerm={ this.state.filterTerm }
            movies={ this.state.movies } />
        }
      </div>
    );
  }
}

export default App;
