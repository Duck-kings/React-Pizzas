import React from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai';

export const BasketItem: React.FC = () => {
    return (
        <li className='cart__list__item'>
            <div className='item__info'>
                <div className='item__info__img'>
                    <img src="/assets/img/pizza-logo.svg" alt="pizzas" />
                </div>
                <div className='item__info__description'>
                    <p className='description__title'>Pizzas name</p>
                    <p className='description__subtitle'>Curst, size</p>
                </div>
            </div>
            <div className='item__count'>
                <div className='rounded-btn'>
                    <AiOutlineMinus />
                </div>
                <span>1</span>
                <div className='rounded-btn plus'>
                    <AiOutlinePlus />
                </div>
            </div>
            <p className='item__price'>15<span>$</span></p>
            <div>
                <div className='rounded-btn delete'>
                    <AiOutlineClose />
                </div>
                <div className='btn item__delete-btn'>Delete</div>
            </div>
        </li>
    )
}
