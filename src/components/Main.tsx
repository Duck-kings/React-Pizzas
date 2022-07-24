import React from 'react';
import { CardList } from './Card/CardList';
import { SortBy } from './SortBy';

export const Main: React.FC = () => {
    return (
        <main className="main">
            <section className='container'>
                <SortBy />
                <CardList />
            </section>
        </main>
    )
}
