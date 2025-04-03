import { useEffect, useState } from "react";
import MovieCard from "../component/MovieCard";
import "../css/home.css";
import { fetchPopularMovies, SearchMovies } from "../services/Api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await fetchPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResult = await SearchMovies(searchQuery);
      setMovies(searchResult);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="Home">
      <form onSubmit={handleSearch}>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search"
          type="text"
          placeholder="Search your movie"  /* add place holder in a search bar */
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
      
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
      </div>
    </>
  );
}

export default Home; 