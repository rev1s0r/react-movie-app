import MovieCard from "../components/MovieCard";
import { use, useState } from "react";
import '../css/Home.css';



function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Matrix", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "1997" },
        { id: 3, title: "Inception", release_date: "2001" },
        { id: 4, title: "Imperator", release_date: "2002" }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert("pidor")
    }

    return (

        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(
                    (movie) =>
                        movie.title.toLowerCase().startsWith(searchQuery) && (
                           <MovieCard movie={movie} key={movie.id} />
                        )
                )}
            </div>
        </div>
        
    )
}

export default Home