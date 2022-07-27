import React from 'react';

import { IPizzas } from '../../types/types';
import { Loader } from '../Loader';
import { Card } from './Card';
import { useAppSelector } from '../../hooks/redux/useAppSelector';

export const CardList: React.FC = () => {
    const pizzas: IPizzas[] = useAppSelector(state => state.pizzas.pizzas);
    
    return (
        <ul className="main__content">
            {
                pizzas.length
                ? pizzas.map(pizza => {
                    return <Card key={pizza.ID} {...pizza}/>
                })
                : <Loader />
            }
        </ul>
    )
}
