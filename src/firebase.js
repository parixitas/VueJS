import {initializeApp} from 'firebase'

// import fireConfig from './.config' 
// import config 

/* 
/ i move my firebase config to one single file config.js
/ 4 push 2 github 
*/

// const app = initializeApp(fireConfig);

/* 
/ if you can user firebase
/ you should set your config like next couple line
*/

const app = initializeApp({
 apiKey: "AIzaSyClOnjzzutTQmtv1DNkcnYsH0LxPr-6LAI",
  authDomain: "cruddemo-ad578.firebaseapp.com",
  databaseURL: "https://cruddemo-ad578.firebaseio.com",
  projectId: "cruddemo-ad578",
  storageBucket: "",
  messagingSenderId: "900347693716"
})


export const db = app.database()
export const namesRef = db.ref('names')