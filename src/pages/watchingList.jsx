import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { removeFromWatchingList } from '../store/slices/watchilngList';
function WatchingList() {
  
  const watchingList = useSelector((state) => state.watchingList.watchingList);
  const dispatch = useDispatch();

  const handleRemoveFromWatchingList = (movie) => {
    dispatch(removeFromWatchingList(movie));
  };
  return (
    <div className="container ">
      <h2 className="mt-3 text-capitalize">watch list</h2>
      {watchingList?.length === 0 ? (
           <div className="watching-list-container d-flex align-items-center justify-content-center  ">
           <div className="no-movies-in-list-content text-center">
           <i className="fa-solid broken-heart fa-heart-crack" ></i>
           <p className="h2 mt-2">no movies in watch list</p>
           <button className="watching-list-btn"> back to home</button>
           </div>
         </div>
      ) : (
        <div className='row'>
          {watchingList?.map((movie) => (
            <div key={movie.id} className="col-md-6 ">
            <div className="card mb-3 bg-secondary-color watchingList-card main-color" style={{ "max-width": "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid rounded-start" alt={movie.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-10">
                        <h5 className="card-title w-100">{movie.title}</h5>
                      </div>
                      <div className="col-2">
                        <i onClick={()=>handleRemoveFromWatchingList(movie)} className="fa-solid fa-heart main-color w-100"></i>
                      </div>
                    </div>
                    <p className="card-text">
                      <small className="text-body-secondary">
                      {movie.release_date}
                      </small>
                    </p>
                    <p className="card-text">
                    {movie.overview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      )}
   
    
    </div>
  );
}

export default WatchingList;
