
import { useContext, useEffect } from "react";
import MovieCard from "./movieCard";

import { NavLangContext } from '../context/navLang';
import axios from "axios";
function MoviesList({ movies, setMovies }) {
  const { selectedLanguage} = useContext(NavLangContext)
  console.log(selectedLanguage)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=bebea00a770e7201f372567aaed2893a&language=${selectedLanguage}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setMovies,selectedLanguage]);
  return (
    <div className="row g-3">
      {movies?.map((movie) => {
        return (
          <div className="col-xl-2 col-md-3 col-xs-6" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        );
      })}
    </div>
  );
}

export default MoviesList;
