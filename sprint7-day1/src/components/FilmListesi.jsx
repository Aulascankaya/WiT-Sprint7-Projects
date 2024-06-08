import React from 'react';
import FilmDetaylari from './FilmDetaylari.jsx';

export default function FilmListesi(props) {
  const { movies } = props;
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <FilmDetaylari key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
