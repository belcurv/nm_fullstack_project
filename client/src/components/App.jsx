import React from 'react';
import { handleErrors, sortMovies } from '../utils';

import Header  from './Header/Header';
import Results from './Results/Results';

import '../index.css';
import Spinner from './Spinner/Spinner';

class App extends React.Component {

  state = {
    loading    : true,
    toggle     : false,
    filterTerm : '',
    movies     : [],
    error      : undefined
  };

  handleFilterChange = (event) => {
    this.setState({ filterTerm : event.target.value });
  }

  handleFilterReset = () => {
    this.setState({ filterTerm : '' });
  }

  handleViewToggle = () => {
    this.setState(prevState => ({ toggle : !prevState.toggle }));
  }

  componentDidMount() {
    const apiEndpoint = 'http://localhost:3000/api/movies/search';
    fetch(`${apiEndpoint}/?title=guardians`)
      .then(handleErrors)
      .then(response => response.json())
      .then(({ Search }) => this.setState({
        loading : false,
        movies  : sortMovies(Search)
      }))
      .catch(error => {
        console.log(error);
        this.setState({ error : true });
      });
  }

  render() {
    return (
      <div className="app">
        <Header
          toggle={ this.state.toggle }
          filterTerm={ this.state.filterTerm }
          onToggle={ this.handleViewToggle }
          onInputChange={ this.handleFilterChange }
          onResetFilter={ this.handleFilterReset} />
        <main>
          {
            this.state.loading ?
            <Spinner /> :
            <Results
            toggle={ this.state.toggle }
            error={ this.state.error }
            filterTerm={ this.state.filterTerm }
            movies={ this.state.movies } />
          }
        </main>
      </div>
    );
  }
}

export default App;
