import React from 'react';
import { ISeries } from "@/models/ISeries";
import { seriesService } from "@/services/api.series.service";

const SeriesPage = async () => {
    const allSeries = await seriesService.getAllSeries();
    console.log("Series array size:", Array.isArray(allSeries) ? allSeries.length : 0);

    return (
        <div className="container" style={{ padding: '20px' }}>
            <div className="movie-grid">
                {
                    Array.isArray(allSeries) && allSeries.length > 0
                        ? allSeries.map((series: ISeries) => (

                           <div key={series.id} >
                               <a href={`/series/${series.id}`}>
                                   <img className="movie-card"
                                       src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                                       alt={series.title}
                                       style={{ width: '100%' }}
                                   />
                               </a>
                               <h3 className="text-lg font-bold">{series.title}</h3>
                               <p>Vote: {series.vote_average}</p>
                           </div>

                        ))
                        : <p>No series available</p>
                }
            </div>
        </div>
    );
};

export default SeriesPage;
