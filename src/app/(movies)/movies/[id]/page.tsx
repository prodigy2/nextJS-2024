import { movieService } from "@/services/api.movie.service";

const MovieDetailPage = async ({ params }: { params: { id: string } }) => {
    const movie = await movieService.getMovieById(params.id);

    if (!movie) {
        return <p>Movie not found</p>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
            <p>{movie.overview}</p>
            <p>Rating: {movie.vote_average}</p>
        </div>
    );
};

export default MovieDetailPage;
