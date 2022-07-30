import React from 'react';
import { useAppSelector } from '../../hooks/redux/useAppSelector';
import { BasketItem } from './BasketItem';

export const BasketList: React.FC = () => {
    const basket = useAppSelector(state => state.cart.cart);

    return (
        <ul className='cart__list'>
            {
                basket.length
                ? basket.map((item, index) => <BasketItem cart={item} key={index} id={index}/>)
                : <h1>You don't order anything</h1>
            }
        </ul>
    )
}
