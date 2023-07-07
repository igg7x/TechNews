import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/index.js";
import { successNotification, errorNotification } from "../../tostify/main.js";

const signInForm = document.querySelector("#signInForm");
const passwordTogle = document.querySelector("#password-toggle");
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
    window.location.href = `${window.location.origin}/src/pages/main-page.html`;
  } catch (err) {
    loginError.textContent = err.message;
    errorNotification();
  }
  signInForm.reset();
});

passwordTogle.addEventListener("click", () => {
  const password = document.querySelector("#password");

  if (password.type === "password") {
    password.type = "text";
    passwordTogle.innerHTML = `<i class="fas text-black fa-lg fa-eye-slash"></i>`;
  } else {
    password.type = "password";
    passwordTogle.innerHTML = `<i class="fa-solid fa-eye fa-lg text-black"></i>`;
  }
});
