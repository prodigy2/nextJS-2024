import { seriesService } from "@/services/api.movie.service";

const SeriesDetailPage = async ({ params }: { params: { id: string } }) => {
    const series = await seriesService.getSeriesById(params.id);

    if (!series) {
        return <p>Series not found</p>;
    }

    return (
        <div>
            <h1>{series.title}</h1>
            <img
                src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                alt={series.title}
            />
            <p>{series.overview}</p>
            <p>Rating: {series.vote_average}</p>
        </div>
    );
};

export default SeriesDetailPage;
