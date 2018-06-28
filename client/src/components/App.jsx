import React   from 'react';
import Header  from './Header/Header';
import Results from './Results/Results';
import Spinner from './Spinner/Spinner';
import { handleErrors, sortMovies } from '../utils';

import '../index.css';

const env = process.env.NODE_ENV;
const apiRoot = env === 'production' ? '/api' : 'http://localhost:3000/api';

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
    fetch(`${apiRoot}/movies/search?title=guardians`)
      .then(handleErrors)
      .then(response => response.json())
      .then(({ Search }) => this.setState({
        loading : false,
        movies  : sortMovies(Search)
      }))
      .catch(error => {
        console.log(error);
        this.setState({
          loading : false,
          error   : true
        });
      });
  }

  render() {
    return (
      <div className="app">
        {
          this.state.loading
            ? <Spinner />
            : this.state.error
              ? <p>Server error - please try again later</p>
              : <main className="app__main">
                <Header
                  toggle={ this.state.toggle }
                  filterTerm={ this.state.filterTerm }
                  onToggle={ this.handleViewToggle }
                  onInputChange={ this.handleFilterChange }
                  onResetFilter={ this.handleFilterReset} />
                <Results
                  toggle={ this.state.toggle }
                  filterTerm={ this.state.filterTerm }
                  movies={ this.state.movies } />
              </main>
        }
      </div>
    );
  }
}

export default App;
