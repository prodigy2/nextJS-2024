import React from 'react';
import {movieService} from "@/services/api.movie.service";

type Params = { id: string };
const MoviePage = async ({params}: {params: Params}) => {
    const movie = await movieService.GetPopular( params.id);
    return (
        <div>
            {movie?.id} : {user?.title}
            <hr/>
            <hr/>
            {JSON.stringify(movie)}
        </div>
    );
};

export default movieService;