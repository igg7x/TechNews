import { auth } from "../../firebase/index.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/index.js";
export const checkAuthState = () => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = `${window.location.origin}/src/pages/login.html`;
    }
  });
};

export const logout = () => {
  signOut(auth).then(() => {
    sessionStorage.removeItem("userId");
    window.location.href = `${window.location.origin}/src/pages/login.html`;
  });
};

export const getUserById = async () => {
  const userId = sessionStorage.getItem("userId");
  const userRef = doc(db, "Users", userId);
  const userSnap = await getDoc(userRef);
  return userSnap.exists() ? userSnap.data() : null;
};
