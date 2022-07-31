import React from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai';
import { useAppDispatch } from '../../hooks/redux/useAppDispatch';
import { decrementCount, deletePizza, incrementCount } from '../../redux/slices/cartSlice';
import { ICart } from '../../types/types';

interface Props {
    cart: ICart,
    id: number
}

export const BasketItem: React.FC<Props> = ({cart, id}) => {
    const dispatch = useAppDispatch();

    const deleteFromCart = (index: number): void => {
        dispatch(deletePizza(index));
    };

    const addOnePizza = (index: number): void => {
        dispatch(incrementCount(index));
    };

    const deleteOnePizza = (index: number): void => {
        if(cart.items.length > 1){
            dispatch(decrementCount(index));
        }
    };

    const totalPrice = (): number => {
        const arr = cart.items.map((item) => {
            return item.price;
        });

        const price = arr.reduce((curr, sum) => curr + sum);
        return price;
    }

    return (
        <li className='cart__list__item' onClick={totalPrice}>
            <div className='item__info'>
                <div className='item__info__img'>
                    <img src={cart.items[0].imageURL} alt="pizzas" />
                </div>
                <div className='item__info__description'>
                    <p className='description__title'>{cart.items[0].name}</p>
                    <p className='description__subtitle'>
                        {`${cart.sizeValue} size, ${cart.curstValue} curst`}
                    </p>
                </div>
            </div>
            <div className='item__count'>
                <div 
                    className={
                        cart.items.length > 1 
                        ? 'rounded-btn minus' 
                        : 'rounded-btn minus disabled'
                    } 
                    onClick={() => {deleteOnePizza(id)}}
                >
                    <AiOutlineMinus />
                </div>
                <span>{cart.items.length}</span>
                <div className='rounded-btn plus' onClick={() => {addOnePizza(id)}}>
                    <AiOutlinePlus />
                </div>
            </div>
            <p className='item__price'>{totalPrice()}<span>$</span></p>
            <div onClick={() => {deleteFromCart(id)}}>
                <div className='rounded-btn delete'>
                    <AiOutlineClose />
                </div>
                <div className='btn item__delete-btn'>Delete</div>
            </div>
        </li>
    )
}
