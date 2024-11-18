import React from 'react';
import { IMovie } from "@/models/IMovie";
import { movieService } from "@/services/api.movie.service";
import MovieComponent from "@/components/MovieComponent";

const moviesPage = async () => {
    const allMovies = await movieService.getAllMovies();
    console.log("Movies array size:", Array.isArray(allMovies) ? allMovies.length : 0);

    return (
        <div>
            <ul>
                <li>
                    {
                        Array.isArray(allMovies) && allMovies.length > 0
                            ? allMovies.map((movie: IMovie) => (

                   <div key={movie.id} className="border p-4">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full"
                        />
                        <h3 className="text-lg font-bold">{movie.title}</h3>
                        <p>Vote: {movie.vote_average}</p>
                    </div>
                            ))
                            : <p>No movies available</p>
                    }
                </li>
            </ul>
        </div>
    );
};

export default moviesPage;
