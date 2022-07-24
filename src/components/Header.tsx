import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';


export const Header:React.FC = () => {
    return (
        <header className="header">
            <section className="container">
                <section className="header__inner">
                    <div className="header__logo">
                        <Link to='/' className="logo__img">
                            <img src='/assets/img/pizza-logo.svg' alt="logo" />
                        </Link>
                        <h1 className="logo__title">React Pizzas</h1>
                    </div>
                    <nav className="header__nav">
                        <ul className="nav__list">
                            <li className="nav__list__item">
                                <a href="#">Pizzas</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__actions">
                        <Link to='/cart' className="actions__cart">
                            <AiOutlineShoppingCart />
                        </Link>
                        <div className="actions__burger">
                            <div className="burger__menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </header>
    )
}
