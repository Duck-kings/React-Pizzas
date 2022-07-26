import React from 'react';
import { IPizzas } from '../../types/types';

export const Card: React.FC<IPizzas> = ({weight, name, keyWords, price, imageURL, size, curst}) => {
    
    const subtitle = keyWords.map(item => {
        return item[0].toUpperCase() + item.slice(1);
    }).join(', ');
    
    return (
        <li className="content__item">
            <div className="item__img">
                <span>{weight} g</span>
                <img src={imageURL} alt="pizza" />
            </div>
            <div className="item__description">
                <p className="desription__title">{name}</p>
                <p className="desription__subtitle">{subtitle}</p>
            </div>
            <div className="item__filters">
                <div className="filters__size">
                    <div className="active">Standart size</div>
                    <div>Large size</div>
                </div>
                <div className="filters__crust">
                    <div>Standart crust</div>
                    <div className="active">Thin crust</div>
                </div>
            </div>
            <div className="item__cart">
                <p><span>{price}</span>$</p>
                <div>To cart</div>
            </div>
        </li>
    )
}
