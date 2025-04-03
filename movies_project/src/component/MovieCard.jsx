

import "../css/MovieCard.css";
import { useMovieContext } from "../cotext/MovieContent";


function MovieCard({movie}){
  const {isFavorites, AddToFavorite,  removeFromFavorite} = useMovieContext();
  const favorite = isFavorites(movie.id)


   function onAddToFavorites(e){
    e.preventDefault()
    if (favorite)  removeFromFavorite(movie.id)
    else AddToFavorite(movie)

   }

    return <div className="movie-card">
        <div className="movie-poster">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

              <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active":""}`} onClick={ onAddToFavorites}>♥</button>
              </div>
        </div>
        <div className="movie-info">
             <h3>{movie.title}</h3>
             <p>{movie.release_date.split("-")[0] }</p>
        </div>
     
    </div>
}     


export default MovieCard
