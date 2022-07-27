import React from 'react';
import { useAppDispatch } from '../hooks/redux/useAppDispatch';
import { useAppSelector } from '../hooks/redux/useAppSelector';
import { sortByLowHigh, sortByHighLow, resetSort } from '../redux/slices/pizzasSlice';

export const SortBy: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const dispatch = useAppDispatch();
    const pizzas = useAppSelector(state => state.pizzas.pizzas);
    const openRef = React.useRef<HTMLDivElement>(null);

    const handleClick = (): void => {
        setIsOpen(prev => !prev)
    };

    const sortLowToHigh = (): void => {
        dispatch(sortByLowHigh(pizzas));
    };

    const sortHighToLow = (): void => {
        dispatch(sortByHighLow(pizzas));
    };

    const resetSorting = (): void => {
        let initialPizzas = localStorage.getItem('initial');
        dispatch(resetSort(JSON.parse(initialPizzas!)));
    };

    React.useEffect(() => {
        const toggleOpened = (e: any): void => {
            if(e.target !== openRef.current){
                setIsOpen(false);
            }
        };

        document.addEventListener('click', toggleOpened);

        return () => document.removeEventListener('click', toggleOpened);
    }, []);


    return (
        <div className="main__sort">
            <div className={isOpen ? 'sort__drop-btn open' : 'sort__drop-btn'} onClick={handleClick}>
                <p ref={openRef}>Sort by:</p>
                <ul className="sort__drop-menu">
                    <li className="drop-menu__item" onClick={resetSorting}>All</li>
                    <li className="drop-menu__item" onClick={sortLowToHigh}>Price low-high</li>
                    <li className="drop-menu__item" onClick={sortHighToLow}>Price high-low</li>
                </ul>
            </div>
        </div>
    )
}
