import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUr2aphj1F0oJjIn5C-ZdYuXr9cVyHx0c",
  authDomain: "testjs-25a58.firebaseapp.com",
  projectId: "testjs-25a58",
  storageBucket: "testjs-25a58.appspot.com",
  messagingSenderId: "575442892281",
  appId: "1:575442892281:web:c3083bca9f54d6c3b2f928",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
