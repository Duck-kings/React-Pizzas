import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { BasketList } from './BasketList';

export const Basket: React.FC = () => {
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
                    <div className='fake-header__clean'>
                        <div className='fake-header__clean__img'>
                            <BsFillTrashFill />
                        </div>
                        <p>Clean Cart</p>
                    </div>
                </section>
                <BasketList />
                <section className='cart__fake-footer'>
                    <div>Go Back</div>
                    <div>Pay now</div>
                </section>
            </section>
        </main>
    )
}
