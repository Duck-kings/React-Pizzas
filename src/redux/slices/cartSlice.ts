import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart } from '../../types/types';

interface state {
    cart: ICart[]
}

const initialState: state = {
    cart: []
};  

const cartSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        getCart: (state: state, action: PayloadAction<ICart[]>): void => {
            state.cart = [...state.cart, ...action.payload];
        }
    }
});


export const { getCart } = cartSlice.actions;

export default cartSlice.reducer;