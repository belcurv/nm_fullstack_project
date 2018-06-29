const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

const filterMovies = (movies, term) => {
  return movies.filter(movie => `${movie.Title} ${movie.Year}`
    .toUpperCase()
    .indexOf(term.toUpperCase()) >= 0);
};

const sortMovies = (movies) => {
  return movies.sort((a, b) => a.Title.localeCompare(b.Title));
};

export { handleErrors, filterMovies, sortMovies };
