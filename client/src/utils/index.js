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
  return movies.sort((a, b) => {
    if (a.Title.toUpperCase() < b.Title.toUpperCase()) { return -1; }
    if (a.Title.toUpperCase() > b.Title.toUpperCase()) { return 1; }
    return 0;
  });
};

export { handleErrors, filterMovies, sortMovies };
