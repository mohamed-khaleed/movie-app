
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import { addToWatchingList, removeFromWatchingList } from '../store/slices/watchilngList';


function MovieCard({ movie }) {
  
  const watchingList = useSelector(state => state.watchingList.watchingList);
  // console.log(watchingList);
  const dispatch = useDispatch();
   

  const isMovieInWatchingList = watchingList?.some(item => item.id === movie.id);

  const handleToggleWatchingList = () => {
    
    if (isMovieInWatchingList) {
      dispatch(removeFromWatchingList(movie));
      
    } else {
      dispatch(addToWatchingList(movie));
    }
  };


  return (
    <div className="movie-card  p-3">
      <div className="movie-card-img">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="card-img-top movie-img"
          alt="description"
        />
      </div>
      <div className="movie-card-info position-relative">
        {/* <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-warning">
          99+
        </span> */}
        <Link to={`movie-Detail/${movie.id}`}>
        <h4 className="mt-4 main-color">{movie.title}</h4>
        </Link>
      
        <div className="d-flex justify-content-between">
          <p>{movie.release_date}</p>
          {
            isMovieInWatchingList?  <i onClick={handleToggleWatchingList} class="fa-solid fa-heart">
            </i>:<i onClick={handleToggleWatchingList} class="fa-regular fa-heart"></i>
          }
         
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
