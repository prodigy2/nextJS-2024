import React from 'react';
import { IMovie } from "@/models/IMovie";
import { movieService } from "@/services/api.movie.service";

const HomePage = async () => {
    const allMovies = await movieService.getAllMovies();
    console.log("Movies array size:", Array.isArray(allMovies) ? allMovies.length : 0);

    return (
        <div className="container" style={{ padding: '20px' }}>
            <div className="movie-grid">
                {
                    Array.isArray(allMovies) && allMovies.length > 0
                        ? allMovies.map((movie: IMovie) => (

                           <div key={movie.id} >
                               <a href={`/movies/${movie.id}`}>
                                   <img className="movie-card"
                                       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                       alt={movie.title}
                                       style={{ width: '100%' }}
                                   />
                               </a>
                               <h3 className="text-lg font-bold">{movie.title}</h3>
                               <p>Vote: {movie.vote_average}</p>
                           </div>

                        ))
                        : <p>No movies available</p>
                }
            </div>
        </div>
    );
};

export default HomePage;
