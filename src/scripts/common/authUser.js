import { auth } from "../../firebase/index.js";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const checkAuthState = () => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = `${window.location.origin}/src/pages/login.html`;
    }
  });
};

export const logout = () => {
  signOut(auth).then(() => {
    window.location.href = `${window.location.origin}/src/pages/login.html`;
  });
};
