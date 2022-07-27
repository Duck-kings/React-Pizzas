import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPizzas } from '../../types/types';

interface state {
    pizzas: IPizzas[] | []
}

const initialState: state = {
    pizzas: []
};  

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        getPizzas: (state: state, action: PayloadAction<IPizzas[]>): void => {
            state.pizzas = [...state.pizzas, ...action.payload];
        },
        sortByLowHigh: (state: state, action: PayloadAction<IPizzas[]>): void => {
            const filtred = [...action.payload].sort((a: IPizzas, b: IPizzas): number => a.price > b.price ? 1 : -1);
            state.pizzas = [...filtred];
        },
        sortByHighLow: (state: state, action: PayloadAction<IPizzas[]>): void => {
            const filtred = [...action.payload].sort((a: IPizzas, b: IPizzas): number => a.price > b.price ? -1 : 1);
            state.pizzas = [...filtred];
        },
        resetSort: (state: state, action: PayloadAction<IPizzas[]>): void => {
            state.pizzas = [...action.payload];
        }
    }
});

export const { getPizzas, sortByLowHigh, sortByHighLow, resetSort } = pizzasSlice.actions;

export default pizzasSlice.reducer;