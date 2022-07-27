import { configureStore } from '@reduxjs/toolkit';
import pizzasSlice from './slices/pizzasSlice';


export const store = configureStore({
    reducer: {
        pizzas: pizzasSlice
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;