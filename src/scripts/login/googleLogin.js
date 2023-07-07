import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/index.js";
import { successNotification, errorNotification } from "../../tostify/main.js";
const googleBtn = document.querySelector("#googleBtn");
const loginError = document.querySelector("#loginError");

googleBtn.addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();
  try {
    const userCredentials = await signInWithPopup(auth, provider);
    const userId = userCredentials.user.uid;

    sessionStorage.setItem("userId", userId);

    window.location.href = `${window.location.origin}/src/pages/main-page.html`;
  } catch (error) {
    loginError.textContent = error.message;
    errorNotification();
  }
});
