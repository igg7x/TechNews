const mobileNavBar = document.querySelector("#mobile-navbar");
const DesktopNavBar = document.querySelector("#desktop-navbar");
import { getUserById, logout } from "../common/authUser.js";

// mobileNavbar.classList.add(
//   "h-[70px]",
//   "w-screen",
//   "glassmorphism",
//   "fixed",
//   "bottom-0",
//   "z-[50]",
//   "lg:hidden"
// );
DesktopNavBar.innerHTML = `
<div class="px-[80px] z-[55] bg-background fixed top-0 rounded-b-sm pb-3 border-b-2 w-full flex items-center justify-between max-w-[1580px] mx-auto">
  <section class="flex items-center pt-4 gap-5">
    <a class="font-title text-text text-[30px] pl-2" href="./main-page.html">
      T<span class="bg-slate-950 px-1 py-2 rounded-md">News</span>
    </a>
    <ul
      class="flex items-center gap-5  text-slate-200 text-lg font-semibold uppercase tracking-[1.15px]"
    >
      <a href="./main-page.html" class="hover:text-primaryBtn font-title transition-colors cursor-pointer">
      <i class="fa-solid fa-house"></i> Home
      </a>
      <a href="./see-more-movies.html?filter=popular" class="hover:text-primaryBtn  font-title transition-colors cursor-pointer">
      <i class="fa-solid fa-magnifying-glass"></i> Categories
      </a>
      <a href="./series.html" class="hover:text-primaryBtn  font-title transition-colors cursor-pointer">
      <i class="fa-regular fa-bookmark"></i> Saved
      </a>
    
    </ul>
  </section>
  
  <div id="dropDownUser"  class="flex relative items-center gap-3 justify-center">
        <div id="userInfo" class="flex  items-center gap-3 justify-center">
        </div>
        <div id="dropdownMenu" class="absolute hidden mt-[5px] top-12 p-2  w-48 bg-slate-950 border-gray-300 rounded-md shadow">
          <div id="userInfoEmail">
          </div>
          <a href="#" class="block px-4 py-2 text-text hover:bg-slate-500"><i class="fa-regular fa-user"></i> Profile</a>
          <hr/>
           <a href="#" id="logout" class="block px-4 py-2 text-text hover:bg-slate-500"><i class="fa-solid fa-door-open"></i> Exit</a>
        </div>
        </div>
        </div>
        `;

// <button  id="logout" class="text-text font-semibold text-xl">
// <i class="fa-solid fa-door-open"></i> Exit</button>
// <form id="searchDesktop">
//   <div
//     class="bg-white flex items-center justify-between rounded-2xl overflow-hidden"
//   >
//     <input id="searchInput"
//       type="text"
//       class="p-2 text-black focus:outline-none"
//       placeholder="Search news..."
//       text-black
//       font-title
//     />
//     <button
//       class="bg-slate-950 hover:bg-blue-600 transition-colors duration-200 p-3"
//       type="submit"
//     >
//       <i class="fa-solid fa-magnifying-glass fa-lg text-text"></i>
//     </button>
//   </div>
// </form>

const userInfo = document.querySelector("#userInfo");
const dropDownUser = document.querySelector("#dropDownUser");
const dropdownMenu = document.querySelector("#dropdownMenu");
const logoutEl = document.querySelector("#logout");
const userInfoEmail = document.querySelector("#userInfoEmail");

dropDownUser.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

logoutEl.addEventListener("click", () => {
  logout();
});

getUserById().then((user) => {
  const userImg = document.createElement("img");
  userImg.classList.add("h-12", "rounded-full");
  userImg.src = user.profilePicture;
  userImg.alt = "profile picture";
  userInfo.appendChild(userImg);

  const userName = document.createElement("h4");
  userName.classList.add(
    "font-light",
    "text-center",
    "text-lg",
    "text-slate-200"
  );
  userName.textContent = user.username;
  userInfo.appendChild(userName);

  userInfoEmail.innerHTML = `
  <h4 class=" font-light text-sm text-slate-200">${user.username}</h4>
  <h4 class=" font-light text-sm text-slate-200">${user.email}</h4>
  <hr />
  `;
});
