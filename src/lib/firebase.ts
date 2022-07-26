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

/*
    ID
    name
    keyWords: []
    imageURL: /assets/img/pizzas/pizza-
    size: [standart, large]
    curst: [standart, thin]
    price
    weight




efac9aee-0d06-40f1-bfe1-3c13528d92fa
7d93b22a-b533-465d-8f43-4c37e3e8fb5d
4edc309c-c6c6-4b99-ac56-3bfc72daf252
02d5b9d9-6dfb-46fa-a04a-b0c88a0f15e0
7f176105-07c5-4297-971a-d709286f4f6a
69fe886b-f6ac-49d2-ac08-0361ca018ac0
69c2fe1d-2744-4ab2-8ef2-785b6fb663af
e8b17204-da60-4286-9edb-8ae480ea8a9f
ad27100a-d1e7-4a3a-be27-d728c6c795f1
cfb48782-2a00-4350-9d64-2b062736314b
0670cf75-2649-40c5-a0c0-b1e6b221d737
cdf584e6-664a-4f85-9768-eb082d0dfd2d
7f332628-186a-4c05-9cbb-4f7e814d36e9
c5b6a068-8793-4c5e-b362-164f3aa9bc95
e1cf727e-e7f9-4bea-96f7-75832f202266

const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID
};


*/ 