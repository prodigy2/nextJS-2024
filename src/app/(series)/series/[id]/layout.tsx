import React from 'react';
import {Metadata} from "next";
import {seriesService} from "@/services/api.series.service";


export const generateMetadata = async ({params}: {params: {id: string} }): Promise<Metadata> => {
    const series  = await seriesService.getSeriesById( params.id);
    console.log(series);
    return {title: 'series?.title'}
}
type Props = { children: React.ReactNode }
const SeriesLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default SeriesLayout;