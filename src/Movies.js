import React from "react";
import "./Movies.css";

const Movies = ({
  title,
  overview,
  poster_path,
  vote_average,
  release_date,
}) => {
  const Img_api = "https://image.tmdb.org/t/p/w1280";

  const setVoteClass = (vote) => {
    return vote >= 8 ? "green" : vote >= 6 ? "orange" : "red";
  };

  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? (Img_api + poster_path)
            : "https://images.unsplash.com/photo-1549881693-bcc63102f2f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        }
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie-overview">
        <h3>Overview:</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movies;
