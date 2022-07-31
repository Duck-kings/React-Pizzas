import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { insertToCart } from '../../lib/firebase';
import { ICart, IPizzas } from '../../types/types';

interface state {
    cart: ICart[]
}

const initialState: state = {
    cart: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getCart: (state: state, action: PayloadAction<ICart[]>): void => {
            state.cart = [...state.cart, ...action.payload];
        },
        addToCart: (state: state, action: PayloadAction<IPizzas>): void => {
            const newPayload: ICart = {
                ID: action.payload.ID,
                curstValue: action.payload.curst[0].value,
                sizeValue: action.payload.size[0].value,
                items: [action.payload]
            };

            // check if the cart is empty 
            if(!state.cart.length) {
                //push to cart newPayload
                state.cart = [...state.cart, newPayload]
            }else{
                // find the index of the item that is in the cart
                const el = [...state.cart].findIndex((item: ICart) => {
                    const curstEquals = item.curstValue === newPayload.curstValue;
                    const sizeEquals = item.sizeValue === newPayload.sizeValue;
                    const idEquals = item.ID === newPayload.ID;

                    if(curstEquals && sizeEquals && idEquals) {
                        return item;
                    }
                });

                if(el !== -1) {
                    // if there is such item push in array items payload
                    state.cart[el].items = [...state.cart[el].items, action.payload];
                }else{
                    // if there is no such item push in array items newPayload
                    state.cart = [...state.cart, newPayload];
                }
            }

            insertToCart(state.cart);
        },
        deletePizza: (state: state, action: PayloadAction<number>): void => {
            const newState = [...state.cart].filter((item, index) => index !== action.payload);

            state.cart = [...newState];
            insertToCart(state.cart);
        },
        incrementCount: (state: state, action: PayloadAction<number>): void => {
            // take first element from cart items on the index from payload
            const newElement = state.cart[action.payload].items[0];

            // take prev state cart items on the index from payload
            const prevItemsState = [...state.cart[action.payload].items];
            state.cart[action.payload].items = [...prevItemsState, newElement];

            insertToCart(state.cart);
        },
        decrementCount: (state: state, action: PayloadAction<number>): void => {
            state.cart[action.payload].items.pop();

            insertToCart(state.cart);
        },
        cleanCart: (state: state):void => {
            state.cart = []
            insertToCart(state.cart);
        }
    }
});

export const { getCart, addToCart, deletePizza, incrementCount, decrementCount, cleanCart } = cartSlice.actions;

export default cartSlice.reducer;