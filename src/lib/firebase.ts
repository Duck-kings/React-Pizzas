import { initializeApp } from "firebase/app";
import {doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { ICart, IFullData } from "../types/types";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FB_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const pizzasCollection = doc(db, 'React-Pizzas', 'Pizzas');
const cartCollection = doc(db, 'React-Pizzas', 'Cart');

async function getPizzasData() {
    try {
        const docSnap = await getDoc(pizzasCollection);

        if(docSnap.exists()){
            return docSnap.data().pizzas;
        }

    } catch (error) {
        console.log(error);
    }
}

async function getCartData() {
    try {
        const docSnap = await getDoc(cartCollection);

        if(docSnap.exists()){
            return docSnap.data().cart;
        }else{
            return null;
        }

    } catch (error) {
        console.log(error);
    }
}

async function getFullData(): Promise<IFullData> {
    const pizzas = await getPizzasData();
    const cart = await getCartData();
    return{
        pizzas,
        cart
    }
}

async function insertToCart(pizza: ICart[]) {
    await updateDoc(cartCollection, {
        cart: [...pizza]
    });
}

export { getPizzasData, getCartData, getFullData, insertToCart }; 