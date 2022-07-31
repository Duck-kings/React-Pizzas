import { configureStore } from '@reduxjs/toolkit';
import pizzasSlice from './slices/pizzasSlice';
import cartSlice from './slices/cartSlice';


export const store = configureStore({
    reducer: {
        pizzas: pizzasSlice,
        cart: cartSlice
    }
});

// types for TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;