import { filters } from '../types/types';

export const toggleActive = (arr: filters[], index: number): filters[] => {
    const newArr = arr.map((item) => {
        if(item.id === index){
            return {...item, isActive: true}
        }
        else{
            return {...item, isActive: false}
        }
    });
    
    return newArr;
}