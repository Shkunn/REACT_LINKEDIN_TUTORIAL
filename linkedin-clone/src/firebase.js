// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyD0flGvr_6SbXaawbbJgTIz5WFcabZ5gdU",
//     authDomain: "linkedin-clone-16456.firebaseapp.com",
//     projectId: "linkedin-clone-16456",
//     storageBucket: "linkedin-clone-16456.appspot.com",
//     messagingSenderId: "1062931284781",
//     appId: "1:1062931284781:web:76d0b6b41073421c74c9a4"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth;

// export { db, auth };

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyD0flGvr_6SbXaawbbJgTIz5WFcabZ5gdU",
//   authDomain: "linkedin-clone-16456.firebaseapp.com",
//   projectId: "linkedin-clone-16456",
//   storageBucket: "linkedin-clone-16456.appspot.com",
//   messagingSenderId: "1062931284781",
//   appId: "1:1062931284781:web:76d0b6b41073421c74c9a4"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

// // Setup database ans authentification
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// export { db, auth };

// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyD0flGvr_6SbXaawbbJgTIz5WFcabZ5gdU",
//     authDomain: "linkedin-clone-16456.firebaseapp.com",
//     projectId: "linkedin-clone-16456",
//     storageBucket: "linkedin-clone-16456.appspot.com",
//     messagingSenderId: "1062931284781",
//     appId: "1:1062931284781:web:76d0b6b41073421c74c9a4"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
// const auth = firebase.auth();

// export { db, auth };


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyD0flGvr_6SbXaawbbJgTIz5WFcabZ5gdU",
    authDomain: "linkedin-clone-16456.firebaseapp.com",
    projectId: "linkedin-clone-16456",
    storageBucket: "linkedin-clone-16456.appspot.com",
    messagingSenderId: "1062931284781",
    appId: "1:1062931284781:web:76d0b6b41073421c74c9a4"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };