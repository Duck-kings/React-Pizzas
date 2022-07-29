import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICart, IPizzas } from '../../types/types';

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
        },
        incrementCount: (state: state, action: PayloadAction<IPizzas>): void => {
            const newPayload: ICart = {
                ID: action.payload.ID,
                curstValue: action.payload.curst[0].value,
                sizeValue: action.payload.size[0].value,
                items: [action.payload]
            };

            if(!state.cart.length) {
                state.cart = [...state.cart, newPayload]
            }else{
                const el = [...state.cart].findIndex((item: ICart) => {
                    const curstEquals = item.curstValue === newPayload.curstValue;
                    const sizeEquals = item.sizeValue === newPayload.sizeValue;
                    const idEquals = item.ID === newPayload.ID;

                    if(curstEquals && sizeEquals && idEquals) {
                        return item;
                    }
                });

                if(el !== -1) {
                    state.cart[el].items = [...state.cart[el].items, action.payload];
                }else{
                    state.cart = [...state.cart, newPayload];
                }
            }
        }
    }
});


export const { getCart, incrementCount } = cartSlice.actions;

export default cartSlice.reducer;