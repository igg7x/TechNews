import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/index.js";
const signInForm = document.querySelector("#signInForm");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm.email.value;
  const password = signInForm.password.value;

  const loginError = document.querySelector("#loginError");

  if (!email) {
    loginError.textContent = "Email is required";
    return;
  }
  if (!password) {
    loginError.textContent = "Password is required";
    return;
  }
  if (email.trim().lehngth < 6) {
    loginError.textContent = "Email must be at least 6 characters";
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    sessionStorage.setItem("userId", auth.currentUser.uid);
    window.location.href = `${window.location.origin}/src/pages/index.html`;
  } catch (err) {
    loginError.textContent = err.message;
  }
  signInForm.reset();
});
