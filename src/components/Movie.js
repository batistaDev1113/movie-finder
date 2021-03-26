import React from 'react';

const IMAGE_API = `https://image.tmdb.org/t/p/w1280`;

export default function Movie({ title, overview, poster_path, vote_average }) {
  // change color based on rating
  const changeColor = (val) => {
    return val >= 8 ? 'green' : 'red';
  };

  return (
    <div className="movie">
      <img src={IMAGE_API + poster_path} alt={title} />

      <div className="movie-info">
        <h3>{title}</h3>
        <span className={changeColor(vote_average)}>{vote_average}</span>
      </div>
      <div className="overview">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}
