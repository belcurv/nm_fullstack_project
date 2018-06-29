import { handleErrors, filterMovies, sortMovies } from '../../src/utils';

const movies = [
  { Title : 'animal 22' },
  { Title : 'Animal_2' },
  { Title : 'ánimal_1' },
  { Title : 'Animal' },
  { Title : 'animal' },
];

const sortedMovies = [
  { Title : 'animal' },
  { Title : 'Animal' },
  { Title : 'animal 22' },
  { Title : 'ánimal_1' },
  { Title : 'Animal_2' },
];

describe('Client utilities', () => {


  context('.handleErrors() utility method', () => {

    it('should be a function', () => {
      expect(typeof handleErrors === 'function').to.be.true;
    });

    it('should be OK with an "ok" response', () => {
      const response = { ok : true };
      const result = handleErrors(response);
      expect(result).to.deep.equal(response);
    });

    it('should throw an error from a non-OK response', () => {
      const response = { ok : false };
      expect(() => handleErrors(response)).to.throw(Error);
    });

  });


  context('.filterMovies() utility method', () => {

    it('should be a function', () => {
      expect(typeof filterMovies === 'function').to.be.true;
    });

    it('should filter an array of movies', () => {
      const result = filterMovies(movies, 'Animal_2');
      expect(result).to.be.an('array').that.has.lengthOf(1);
      expect(result).to.include({ Title : 'Animal_2' });
      expect(result).to.not.include({ Title : 'ánimal_1' });
    });

    it('should filter an array of movies', () => {
      const result = filterMovies(movies, '2');
      expect(result).to.be.an('array').that.has.lengthOf(2);
      expect(result).to.include({ Title : 'Animal_2' });
      expect(result).to.include({ Title : 'animal 22' });
      expect(result).to.not.include({ Title : 'ánimal_1' });
    });

    it('should filter an array of movies', () => {
      const result = filterMovies(movies, 'boogers');
      expect(result).to.be.an('array').that.is.empty;
    });

  });


  context('.sortMovies() utility method', () => {

    it('should be a function', () => {
      expect(typeof sortMovies === 'function').to.be.true;
    });

    it('should sort an array of movies', () => {
      const result = sortMovies(movies);
      expect(result).to.be.an('array').that.deep.equals(sortedMovies);
    });

  });

});
