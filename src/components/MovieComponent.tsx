import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import Link from "next/link";

interface IProps {
    movie: IMovie;
}
const MovieComponent: FC<IProps> = ({movie }) => {
    return (
        <div>
            <Link href={`/movies/${movie.id}`}>{movie.id}:{movie.id}</Link>
        </div>
    );
};

export default MovieComponent;