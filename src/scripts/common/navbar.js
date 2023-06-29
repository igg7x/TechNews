const mobileNavBar = document.querySelector("#mobile-navbar");
const DesktopNavBar = document.querySelector("#desktop-navbar");

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
<div class="px-[80px] w-full flex items-center justify-between max-w-[1580px] mx-auto">
<section class="flex items-center pt-4 gap-5">
  <a class="font-title text-text text-[30px] pl-2" href="./main-page.html">
    T <span class="bg-primaryBtn px-1 py-2 rounded-md">News</span>
  </a>
  <ul
    class="flex items-center gap-5  text-slate-200 text-lg font-semibold uppercase tracking-[1.15px]"
  >
    <a href="./main-page.html" class="hover:text-primaryBtn font-title transition-colors cursor-pointer">
      Latest
    </a>
    <a href="./see-more-movies.html?filter=popular" class="hover:text-primaryBtn  font-title transition-colors cursor-pointer">
      
    </a>
    <a href="./series.html" class="hover:text-primaryBtn  font-title transition-colors cursor-pointer">
      Politics
    </a>
    <a href="./series.html" class="hover:text-primaryBtn  font-title transition-colors cursor-pointer">
      Sports
    </a>
    <a href="./series.html" class="hover:text-primaryBtn  font-title transition-colors cursor-pointer">
    Technology
  </a>
  </ul>
</section>
<form id="searchDesktop">
  <div
    class="bg-white flex items-center justify-between rounded-2xl overflow-hidden"
  >
    <input id="searchInput"
      type="text"
      class="p-2 text-black focus:outline-none"
      placeholder="Search news..."
      text-black
      font-title
    />
    <button
      class="bg-primaryBtn hover:bg-blue-600 transition-colors duration-200 p-3"
      type="submit"
    >
      <i class="fa-solid fa-magnifying-glass fa-lg"></i>
    </button>
  </div>
</form>
</div>
`;
