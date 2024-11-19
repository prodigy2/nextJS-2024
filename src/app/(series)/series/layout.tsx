import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'SeriesLayout metadata'
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