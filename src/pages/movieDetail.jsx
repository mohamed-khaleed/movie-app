import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { axiosInstance } from "../apis/config";
function MovieDetail() {
  const [movieDetails, setMovieDetails] = useState({});

  const params = useParams();
  console.log(params);

  useEffect(() => {
    axiosInstance
      .get(`/${params.id}?`)
      .then((res) => {
        console.log(res.data);
        setMovieDetails(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  return (
    <div className="container py-5">
      <div className="row g-3">
        <div className="col-4">
          <div className="movie-details-img">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              className="movie-details-img"
              alt={`${movieDetails.original_title
              }`}
            />
          </div>
        </div>
        <div className="col-8">
          <div className="movie-details-info">
            <h2 className="display-3 fw-bold">{movieDetails.original_title}</h2>
            <p className="mt-4 mb-4">{movieDetails.release_date}</p>
            <p className="lead">{movieDetails.overview}</p>
            <div>
              <span>Duration: {movieDetails.runtime}Min</span>{" "}
              <span className="ms-5">
                language: {movieDetails.original_language}
              </span>
              <div className="genres d-flex mt-3 mb-3">
                {movieDetails?.genres?.map((genre) => (
                  <div key={genre.id} className="me-3">
                    <span className="badge rounded-pill genres-icon text-bg-light">{genre.name}</span>
                  </div>
                ))}
              </div>
              <div className="company-data d-flex">
              {movieDetails?.production_companies?.map((PC) => (
                  <div key={PC.id} className="me-3 ">
                       <img src={`https://image.tmdb.org/t/p/w500/${PC.logo_path}`} className="company-logo mt-4" alt={`${PC.name}`}  />
                  </div>
                ))} 
              </div>
                
              <div  className="mt-5">
                    <span className="badge rounded-pill genres-icon text-bg-light"><a href={`${movieDetails.homepage}`}>website🔗</a></span>
                  </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
