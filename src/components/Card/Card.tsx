import React from 'react';
import { useAppSelector } from '../../hooks/redux/useAppSelector';
import { IPizzas, filters, ICart } from '../../types/types';

export const Card: React.FC<IPizzas> = ({weight, name, keyWords, price, imageURL, size, curst, ID}) => {
    const cartItems = useAppSelector(state => state.cart.cart);
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

    const addToCart = (): void => {
        const activeSize = sizeState.filter(item => item.isActive ? item : null);
        const activeCurst = curstState.filter(item => item.isActive ? item : null);

        const cart: ICart[] = [{
            ID,
            name,
            imageURL,
            price,
            keyWords,
            weight,
            size: activeSize,
            curst: activeCurst,
            count: 1
        }]; 
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
                <div onClick={addToCart}>To cart</div>
            </div>
        </li>
    )
}
