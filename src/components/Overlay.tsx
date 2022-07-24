import React from 'react'

export const Overlay: React.FC = () => {
    return (
        <section className="overlay">
            <section className="overlay__sidebar">
                <nav className="sidebar__nav">
                    <ul className="sidebar__nav__list">
                        <li className="sidebar__nav__list__item">
                            <a href="#">Pizzas</a>
                        </li>
                        <li className="sidebar__nav__list__item">
                            <a href="#">Drinks</a>
                        </li>
                    </ul>
                </nav>
            </section>
        </section>
    )
}
