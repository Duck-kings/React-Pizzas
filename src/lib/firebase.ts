import { initializeApp } from "firebase/app";
import {doc, getDoc, getFirestore} from 'firebase/firestore';

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

const collection = doc(db, 'React-Pizzas', 'Pizzas');

async function getData() {
    try {
        const docSnap = await getDoc(collection);

        if(docSnap.exists()){
            return docSnap.data().pizzas;
        }

    } catch (error) {
        console.log(error);
    }
}

export { getData }; 