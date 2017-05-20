import { Movie } from './movieList';

describe('Movie', () => {
    it('has title', () => {
       const movie = new Movie('tt0120338', 'Titanic', '1997',
'https://images-na.ssl-images-amazon.com/images/M/\
/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
    expect(movie.Title).toBe('Titanic');
  });
  it('has imdb Id', () => {
    const movie = new Movie('tt0120338', 'Titanic', '1997',
'https://images-na.ssl-images-amazon.com/images/M/\
/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
    expect(movie.imdbID).toBe('tt0120338');
  });
  it('has poster', () => {
    const movie = new Movie('tt0120338', 'Titanic', '1997',
'https://images-na.ssl-images-amazon.com/images/M/\
/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
expect(movie.Poster).toBe('https://images-na.ssl-images-amazon.com/images/M/\
  /MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
  });
  it('has year', () => {
    const movie = new Movie('tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/images/M/\
      /MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
    expect(movie.Year).toBe('1997');
  });
  it('can clone itself', () => {
    const movie = new Movie('tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/\
      /images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
    const clone = movie.clone();
    expect(movie).toEqual(clone);
  });
});
