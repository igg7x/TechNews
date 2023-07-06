export const login = (user) => {
  if (!user) {
    window.location.href = `${window.location.origin}/src/pages/login.html`;
  }
};
