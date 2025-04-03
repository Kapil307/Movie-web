const API_KEY = "a87478d33cdac6915267ed2ce4e025f0"
const BASE_URL = "https://api.themoviedb.org/3"


export const fetchPopularMovies = async () =>{
    const responce = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await responce.json();
    return data.results
};

export const SearchMovies = async (query) => {
    const responce = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await responce.json();
    return data.results;
};