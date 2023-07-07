import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/index.js";
const registerEl = document.querySelector("#registerForm");

const usernameContainer = document.querySelector("#usernameContainer");
const emailContainer = document.querySelector("#emailContainer");
const passwordContainer = document.querySelector("#passwordContainer");
const passwordConfirmContainer = document.querySelector(
  "#passwordConfirmContainer"
);
const usernameError = document.querySelector("#usernameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const passwordConfirmError = document.querySelector("#passwordConfirmError");
const passwordTogle = document.querySelector("#password-toggle");
const passwordConfirmTogle = document.querySelector("#passwordConfirm-toggle");
registerEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = registerEl.username.value;
  const email = registerEl.email.value;
  const password = registerEl.password.value;
  const passwordConfirm = registerEl.passwordConfirm.value;

  if (username.trim() === "") {
    usernameError.textContent = "Username is required";
    return;
  }
  usernameError.textContent = "";
  if (email.trim() === "") {
    emailError.textContent = "Email is required";
    return;
  }
  emailError.textContent = "";
  if (password.trim() === "") {
    passwordError.textContent = "Password is required";
    return;
  }
  passwordError.textContent = "";
  if (passwordConfirm.trim() === "") {
    passwordConfirmError.textContent = "Password confirmation is required";
    return;
  }
  passwordConfirmError.textContent = "";
  if (username.trim().length < 5) {
    usernameError.textContent = "Username must be at least 5 characters";
    return;
  }
  usernameError.textContent = "";
  if (email.trim().length < 5) {
    emailError.textContent = "Email must be at least 5 characters";
    return;
  }
  emailError.textContent = "";
  if (password.trim().length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    return;
  }
  passwordError.textContent = "";
  if (password.trim() !== passwordConfirm.trim()) {
    passwordConfirmError.textContent = "Passwords do not match";
    return;
  }
  passwordConfirmError.textContent = "";

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredentials;
    await setDoc(doc(db, "Users", user.uid), {
      username,
      email,
      saved: [],
      profilePicture:
        "https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg",
    });

    sessionStorage.setItem("userId", auth.currentUser.uid);
    window.location.href = `${window.location.origin}/src/pages/main-page.html`;
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      emailError.textContent = "Email already in use";
    }
    if (error.code === "auth/invalid-email") {
      emailError.textContent = "Invalid email";
    }
    if (error.code === "auth/weak-password") {
      passwordError.textContent = "Weak password";
    }
  }
  registerEl.reset();
});

passwordTogle.addEventListener("click", () => {
  const password = document.querySelector("#password");
  if (password.type === "password") {
    password.type = "text";
    passwordTogle.innerHTML = `<i class="fa-solid fa-lg text-black fa-eye-slash"></i>`;
  } else {
    password.type = "password";
    passwordTogle.innerHTML = `<i class="fa-solid fa-eye fa-lg text-black"></i>`;
  }
});

passwordConfirmTogle.addEventListener("click", () => {
  const passwordConfirm = document.querySelector("#passwordConfirm");
  if (passwordConfirm.type === "password") {
    passwordConfirm.type = "text";
    passwordConfirmTogle.innerHTML = `<i class="fa-solid fa-lg text-black fa-eye-slash"></i>`;
  } else {
    passwordConfirm.type = "password";
    passwordConfirmTogle.innerHTML = `<i class="fa-solid fa-eye fa-lg text-black"></i>`;
  }
});
