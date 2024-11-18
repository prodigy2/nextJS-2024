import React from 'react';
import {movieService} from "@/services/api.movie.service";

type Params = { id: string };
const MoviePage = async ({params}: {params: Params}) => {
    const movie = await movieService.getMovieById( params.id);
    return (
        <div>
            {movie?.title} : {movie?.id}
            <hr/>
            <hr/>
            {JSON.stringify(movie)}
        </div>
    );
};

export default MoviePage;