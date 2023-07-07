import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/index.js";
import { setDoc, doc } from "firebase/firestore";

const googleBtn = document.querySelector("#googleBtn");
const signUpError = document.querySelector("#signUpError");

googleBtn.addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();

  try {
    const userCredentials = await signInWithPopup(auth, provider);

    const { user } = userCredentials;
    const { email, displayName: username } = user;
    await setDoc(doc(db, "Users", user.uid), {
      username,
      email,
      saved: [],
      profilePicture: user.photoURL,
    });

    sessionStorage.setItem("userId", userCredentials.user.uid);
    window.location.href = `${window.location.origin}/src/pages/main-page.html`;
  } catch (error) {
    console.log(error);
  }
});
