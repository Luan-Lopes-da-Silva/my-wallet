import * as firebase from 'firebase/app';
import 'firebase/auth'; // Se você estiver usando autenticação
import 'firebase/firestore'; // Se você estiver usando o Firestore
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { getReactNativePersistence,initializeAuth} from 'firebase/auth'
import {initializeApp, getApps, getApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBUBU21RFn95rO7sHA5oCudypeS_a-goMg",
    authDomain: "my-wallet-28f74.firebaseapp.com",
    projectId: "my-wallet-28f74",
    storageBucket: "my-wallet-28f74.appspot.com",
    messagingSenderId: "270318248",
    appId: "1:270318248:web:92ffd708bd0b6c88cea09d",
    measurementId: "G-RRK253GWY0"
};


const app = getApps().length === 0? initializeApp(firebaseConfig) : getApp()

const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
})

export {auth}