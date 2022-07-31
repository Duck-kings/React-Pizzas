import React from 'react';
import { useAppDispatch } from '../../hooks/redux/useAppDispatch';
import { IPizzas, filters } from '../../types/types';
import { addToCart } from '../../redux/slices/cartSlice';
import { toggleActive } from '../../lib/toggleActive';
import { getCartPizza } from '../../lib/getCartPizza';
import { pizzaInfo } from '../../types/types';

export const Card: React.FC<IPizzas> = ({weight, name, keyWords, price, imageURL, size, curst, ID}) => {
    const dispatch = useAppDispatch();
    const [sizeState, setSizeState] = React.useState<filters[]>(size);
    const [curstState, setCurstState] = React.useState<filters[]>(curst);
    const pizzaInfo: pizzaInfo = {
        ID,
        name,
        imageURL,
        price,
        keyWords,
        weight
    };

    const keyWordToString = keyWords.map(item => {
        return item[0].toUpperCase() + item.slice(1);
    }).join(', ');

    const toggleActiveSize = (arr: filters[], index: number): void => {
        const newArr = toggleActive(arr, index);
        setSizeState([...newArr]);
    };

    const toggleActiveCurst = (arr: filters[], index: number): void => {
        const newArr = toggleActive(arr, index);
        setCurstState([...newArr]);
    };

    const addPizza = (): void => {
        const pizza = getCartPizza(sizeState, curstState, pizzaInfo);
        dispatch(addToCart(pizza));
    };

    return (
        <li className="content__item">
            <div className="item__img">
                <span>{weight} g</span>
                <img src={imageURL} alt="pizza" />
            </div>
            <div className="item__description">
                <p className="desription__title">{name}</p>
                <p className="desription__subtitle">{keyWordToString}</p>
            </div>
            <div className="item__filters">
                <div className="filters__size">
                    {
                        sizeState.map((item, index) => {
                            return <div 
                                key={index} 
                                className={item.isActive ? 'active' : ''} 
                                onClick={() => toggleActiveSize(size, index)}
                            >
                                {item.value[0].toUpperCase() + item.value.slice(1)}
                            </div>
                        })
                    }
                </div>
                <div className="filters__crust">
                    {
                        curstState.map((item, index) => {
                            return <div 
                                key={index} 
                                className={item.isActive ? 'active' : ''} 
                                onClick={() => toggleActiveCurst(curst, index)}
                            >
                                {item.value[0].toUpperCase() + item.value.slice(1)}
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="item__action">
                <p><span>{price}</span>$</p>
                <div onClick={addPizza}>To cart</div>
            </div>
        </li>
    )
}
