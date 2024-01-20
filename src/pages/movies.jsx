
import MoviesList from "../components/moviesList";
import SearchBox from "../components/searchBox";
import { useState } from "react";



function Movies() {
  const [searchQuery,setSearchQuery]=useState([])
  const [movies, setMovies] = useState([]);
  return (
    <div className="container py-5">
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery}  setMovies={setMovies} movies={movies} />
      <h2 className="text-capitalize">popular movies</h2>
     
      <MoviesList  setMovies={setMovies} movies={movies}  />
     
    </div>
  );
}

export default Movies;
