import React from 'react';
import {Metadata} from "next";
import {movieService} from "@/services/api.movie.service";


export const generateMetadata = async ({params}: {params: {id: string} }): Promise<Metadata> => {
    const movie  = await movieService.GetServerSideProps( params.id);
    console.log(movie);
    return {title: 'movie?.title'}
}
type Props = { children: React.ReactNode }
const UserLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default UserLayout;