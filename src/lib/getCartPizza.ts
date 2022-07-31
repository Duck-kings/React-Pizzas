import { filters } from '../types/types';
import { IPizzas } from '../types/types';
import { pizzaInfo } from '../types/types';

// return pizza which need add to cart 
export const getCartPizza = (sizeState: filters[], curstState: filters[], {ID, name, imageURL, weight, price, keyWords}: pizzaInfo): IPizzas => {
    const activeSize = sizeState.filter(item => item.isActive ? item : null);
    const activeCurst = curstState.filter(item => item.isActive ? item : null);

    const pizza: IPizzas = {
        ID,
        name,
        imageURL,
        price,
        keyWords,
        weight,
        size: activeSize,
        curst: activeCurst,
    };
    
    return pizza;
}