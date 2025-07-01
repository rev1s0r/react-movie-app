import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';


function Favorites () {
    const {favorites} = useMovieContext();

    if(favorites) {
        return(
            <div className="movies-grid">
                {favorites.map(
                    (movie) =>
                    (
                        <MovieCard movie={movie} key={movie.id} />
                    )
                )}
            </div>
        )
    }

    return (
        <div className="favorites-empty">
            <h2>No favorite movies yet</h2>
            <p>start adding favorites to see them here</p>
        </div>
    );
}

export default Favorites