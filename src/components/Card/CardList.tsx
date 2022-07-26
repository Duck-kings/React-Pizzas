import React from 'react';
import { getData } from '../../lib/firebase';
import { IPizzas } from '../../types/types';
import { Loader } from '../Loader';
import { Card } from './Card';

export const CardList: React.FC = () => {
    let [pizzas, setPizzas] = React.useState<IPizzas[]>([]);

    React.useEffect(() => {
        getData()
            .then(res => setPizzas(prev => [...prev, ...res]))
            .catch(e => console.log(e));
    }, []);

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
