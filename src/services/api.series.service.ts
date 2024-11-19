import {ISeries} from "@/models/ISeries";



const seriesService = {

    getAllSeries: async (): Promise<ISeries[]> => {
        const series = await fetch( `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then(value => value.json());
        console.log(series);
        return series.results;
    },

    getSeriesById: async (id: string | number): Promise<ISeries | null> => {
        const series = await fetch( `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then(value => value.json());
        console.log(series);
        return series;
    },

}

export { seriesService };