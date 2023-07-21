const footer = document.querySelector("#footer");

footer.classList.add(
  "bg-background",
  "text-slate-200",
  "flex",
  "flex-col",
  "items-center",
  "h-20",
  "border-t-2"
);

footer.innerHTML = `

  <div class="flex flex-col items-center mt-5 gap-3">
  <a class="font-title text-text text-[30px] pl-2" href="./main-page.html">
     T<span class="bg-slate-950 px-1 py-2 rounded-md">News</span>
   </a>
   <div class="flex  items-center gap-4">
       <a href="
       https://www.facebook.com/">
       <i class="fa-brands fa-facebook-f fa-xl"></i>
       </a>
       <a href="
       https://www.instagram.com/">
       <i class="fa-brands fa-instagram fa-xl"></i>
       </a>
       <a href="
       https://www.twitter.com/">
       <i class="fa-brands fa-twitter fa-xl"></i>
       </a>
       <a href="
       https://www.youtube.com/">
       <i class="fa-brands fa-youtube fa-xl"></i>
       </a>
   </div>
   <p class="text-sm font-semibold">©TNews 2023 All rights reserved.</p>
  </div>


`;
