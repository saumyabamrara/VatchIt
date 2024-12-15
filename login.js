import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
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

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Sign In with Email and Password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`Login successful! Welcome back, ${user.displayName || user.email}!`);
      window.location.href = "index.html"; // Redirect to homepage
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
