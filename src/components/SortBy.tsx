import React from 'react'

export const SortBy: React.FC = () => {
    return (
        <div className="main__sort">
            <div className="sort__drop-btn">
                <p>Sort by:</p>
                <ul className="sort__drop-menu">
                    <li className="drop-menu__item">All</li>
                    <li className="drop-menu__item">Price less-grater</li>
                    <li className="drop-menu__item">Price grater-less</li>
                </ul>
            </div>
        </div>
    )
}
