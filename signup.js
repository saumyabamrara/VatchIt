import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBHYyikDPJDouI3lfekecb2uSKMSwcsZZY",
  authDomain: "vatchit-e1376.firebaseapp.com",
  projectId: "vatchit-e1376",
  storageBucket: "vatchit-e1376.firebasestorage.app",
  messagingSenderId: "928515714552",
  appId: "1:928515714552:web:951ca5bf3a73b8b0eeba0d",
  measurementId: "G-LXLRN8S02E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle signup form submission
document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Sign up successful! Welcome, " + userCredential.user.email);
      window.location.href= "index.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});

