import React from 'react';

export const BasketItem: React.FC = () => {
    return (
        <li className='cart__list__item'>
            <div className='item__info'></div>
            <div className='item__count'></div>
            <div className='item__price'></div>
        </li>
    )
}
