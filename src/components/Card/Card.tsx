import React from 'react';

export const Card: React.FC = () => {
    return (
        <li className="content__item">
            <div className="item__img">
                <span>555 g</span>
                <img src="./PizzasPage/Pizzas/BBQ.jpg" alt="pizza" />
            </div>
            <div className="item__description">
                <p className="desription__title">Pizza Name</p>
                <p className="desription__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                <p><span>15</span>$</p>
                <div>To cart</div>
            </div>
        </li>
    )
}
