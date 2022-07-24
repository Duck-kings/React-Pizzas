import React from 'react';
import { BasketItem } from './BasketItem';

export const BasketList: React.FC = () => {
    return (
        <ul className='cart__list'>
            <BasketItem />
        </ul>
    )
}
