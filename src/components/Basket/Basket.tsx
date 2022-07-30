import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { BasketList } from './BasketList';

import { cleanCart } from '../../redux/slices/cartSlice';
import { useAppDispatch } from '../../hooks/redux/useAppDispatch';
import { Link } from 'react-router-dom';

export const Basket: React.FC = () => {
    const dispatch = useAppDispatch();

    const deleteAllPizzas = (): void => {
        dispatch(cleanCart());
    };

    return (
        <main className='cart'>
            <section className='container'>
                <section className='cart__fake-header'>
                <div className='fake-header__logo'>
                        <div className='fake-header__logo__img'>
                            <AiOutlineShoppingCart />
                        </div>
                        <p>Cart</p>
                    </div>
                    <div className='fake-header__clean' onClick={deleteAllPizzas}>
                        <div className='fake-header__clean__img'>
                            <BsFillTrashFill />
                        </div>
                        <p>Clean Cart</p>
                    </div>
                </section>
                <BasketList />
                <section className='cart__fake-footer'>
                    <Link to='/' className='btn back-btn'>Go Back</Link>
                    <div className='btn pay-btn'>Pay now</div>
                </section>
            </section>
        </main>
    )
}
