import {IMovie} from "@/models/IMovie";



const movieService = {

    getAllMovies: async (): Promise<IMovie[]> => {
        const movies = await fetch( `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then(value => value.json());
        console.log(movies);
        return movies.results;
    },

    getMovieById: async (id: string | number): Promise<IMovie | null> => {
        const movie = await fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then(value => value.json());
        console.log(movie);
        return movie;
    },

}

export { movieService };