import React from 'react';
import {IMovie} from "@/models/IMovie";
import {movieService} from "@/services/api.movie.service";
import MovieComponent from "@/components/MovieComponent";

const moviesPage = async () => {
    const allMovies = await movieService.getAllMovies();

    return (
        <div>
            <ul>
                <li>

                {
                    allMovies.map((movie:IMovie) => (<div key={movie.id}>
                        <MovieComponent movie={movie}/>
                    </div>))
                }
                </li>

            </ul>
        </div>
    );
};

export default moviesPage;