// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.use(VueFire)

Vue.config.productionTip = false

let app;
let config = {
  apiKey: "AIzaSyClOnjzzutTQmtv1DNkcnYsH0LxPr-6LAI",
  authDomain: "cruddemo-ad578.firebaseapp.com",
  databaseURL: "https://cruddemo-ad578.firebaseio.com",
  projectId: "cruddemo-ad578",
  storageBucket: "",
  messagingSenderId: "900347693716"
};

// let f = firebase.initializeApp(config)
const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.database()
// let db = app.database()
// let namesRef = db.ref('names')
// export const db = f.database()
const namesRef = db.ref('names')
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      firebase:{
        persons: namesRef
      },
      template: '<App/>',
      components: { App },
      router
    })
  }
});
export { db, namesRef,app }


