import { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'pegasus-d3806.firebaseapp.com',
  projectId: 'pegasus-d3806',
  storageBucket: 'pegasus-d3806.firebasestorage.app',
  messagingSenderId: '852801741846',
  appId: '1:852801741846:web:2cbedef6ede20c4c58c137'
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)