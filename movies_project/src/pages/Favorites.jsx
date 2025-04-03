import MovieCard from '../component/MovieCard';
import { useMovieContext } from '../cotext/MovieContent';
import '../css/Favorate.css'

function Favorites(){

   const { favorites } = useMovieContext();

   
  
   if (favorites && favorites.length > 0) {     /* show contant which are add into favorites */
     return(
        <div className='movies-grids'>          
        {favorites.map((movie) =>(
             <MovieCard movie={movie} key={movie.id} />
          ))}
        </div> 
     )
 }

return(
   <div className="favorites-empty">     
   <h2>
    No Favorite Movie Yet                    /* show contant which is showing before any contant add into favorites */
   </h2> 
   <p>Starting movies to your favorites, and they will appear here!</p>
   </div>
)

}





export default Favorites