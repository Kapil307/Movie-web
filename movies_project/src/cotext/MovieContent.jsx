import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);  

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");  //"useEffect use for skip unnessery routing"
        if (storedFavs) setFavorites(JSON.parse(storedFavs));
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));          //"store contant into local storage"
    }, [favorites]);

    const AddToFavorite = (movie) => {
        
        setFavorites(prev => [...prev, movie]);
    };

    const removeFromFavorite = (movieId) => {
        setFavorites(prev => prev.filter((movie) => movie.id !== movieId));
    };

    const isFavorites = (movieId) => {
        return favorites.some(movie => movie.id === movieId);  // " don't  add any contant twince favorites"
    };

    const value = {
        favorites,  // ✅ Change "Favorites" to "favorites"
        AddToFavorite,
        removeFromFavorite,
        isFavorites
    };

    return <MovieContext.Provider value={value}>
        {children}</MovieContext.Provider>;
};
