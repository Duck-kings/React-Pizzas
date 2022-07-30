import React from 'react';
import { useAppDispatch } from '../../hooks/redux/useAppDispatch';
import { IPizzas, filters } from '../../types/types';
import { addToCart } from '../../redux/slices/cartSlice';

export const Card: React.FC<IPizzas> = ({weight, name, keyWords, price, imageURL, size, curst, ID}) => {
    const dispatch = useAppDispatch();
    const [sizeState, setSizeState] = React.useState<filters[]>(size);
    const [curstState, setCurstState] = React.useState<filters[]>(curst);

    const keyWordToString = keyWords.map(item => {
        return item[0].toUpperCase() + item.slice(1);
    }).join(', ');

    const handleSizeClick = (arr: filters[], index: number): void => {
        const newArr = arr.map((item) => {
            if(item.id === index){
                return {...item, isActive: true}
            }
            else{
                return {...item, isActive: false}
            }
        });

        setSizeState(prev => [...newArr]);
    };

    const handleCurstClick = (arr: filters[], index: number): void => {
        const newArr = arr.map((item) => {
            if(item.id === index){
                return {...item, isActive: true}
            }
            else{
                return {...item, isActive: false}
            }
        });

        setCurstState(prev => [...newArr]);
    };

    const addPizza = (): void => {
        const activeSize = sizeState.filter(item => item.isActive ? item : null);
        const activeCurst = curstState.filter(item => item.isActive ? item : null);

        const cart: IPizzas = {
            ID,
            name,
            imageURL,
            price,
            keyWords,
            weight,
            size: activeSize,
            curst: activeCurst,
        };
        
        dispatch(addToCart(cart));
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
                            return <div key={index} className={item.isActive ? 'active' : ''} onClick={() => handleSizeClick(size, index)}>{item.value[0].toUpperCase() + item.value.slice(1)}</div>
                        })
                    }
                </div>
                <div className="filters__crust">
                    {
                        curstState.map((item, index) => {
                            return <div key={index} className={item.isActive ? 'active' : ''} onClick={() => handleCurstClick(curst, index)}>{item.value[0].toUpperCase() + item.value.slice(1)}</div>
                        })
                    }
                </div>
            </div>
            <div className="item__cart">
                <p><span>{price}</span>$</p>
                <div onClick={addPizza}>To cart</div>
            </div>
        </li>
    )
}
