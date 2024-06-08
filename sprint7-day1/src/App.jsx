import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { movies } from './sahteVeri';
import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import FilmListesi from './components/FilmListesi';
import Film from './components/Film';

export default function App() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [movieList, setMovieList] = useState(movies);

  const KaydedilenlerListesineEkle = (movie) => {
    if (!savedMovies.find((savedMovie) => savedMovie.id === movie.id)) {
      setSavedMovies([...savedMovies, movie]);
    }
  };

  return (
    <Router>
      <div>
        <KaydedilenlerListesi list={savedMovies} />
        <Switch>
          <Route exact path="/">
            <FilmListesi movies={movieList} />
          </Route>
          <Route path="/filmler/:id">
            <Film addToSavedList={KaydedilenlerListesineEkle} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
