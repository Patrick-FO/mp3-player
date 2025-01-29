import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCVBWgvQ8vyyNvdAq2_-uLer9D5CSkWyHI",
  authDomain: "mp3-player-a6490.firebaseapp.com",
  projectId: "mp3-player-a6490",
  storageBucket: "mp3-player-a6490.firebasestorage.app",
  messagingSenderId: "161294449231",
  appId: "1:161294449231:web:78ee85682def41d312483a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);