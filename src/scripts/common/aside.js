const asideDesktop = document.querySelector("#aside-desktop");

asideDesktop.classList.add(
  "bg-accent",
  "w-[200px]",
  "border-r-2",
  "rounded-lg",
  "min-h-[calc(100vh-61px)]",
  "ml-[5px]",
  "lg:flex",
  "fixed"
);

asideDesktop.innerHTML = `
<div class = "w-full h-[calc(100vh-61px)] flex flex-col items-center  gap-3 pt-[20px]">
<h4 class="font-light text-center text-xl text-slate-200">Menu</h4>
<ul class=" pl-[10px] text-text font-semibold text-xl w-full  flex flex-col gap-6 items-start">
    <li ><i class="fa-solid fa-house"></i> Home</li>
    <li ><i class="fa-solid fa-magnifying-glass"></i> Categories</li>
    <li><i class="fa-regular fa-bookmark"></i> Saved</li>
</ul>
<div  h-auto w-full class="flex flex-col items-start gap-6 justify-start">
    <div class="flex w-full justify-start items-start gap-3 ">
        <div>
             <img class="h-12 rounded-full" src="https://i.pravatar.cc/300" alt="profile picture">
        </div>
         <h4 class=" font-light text-center text-lg text-slate-200">Username</h4>
    </div>
  <button class="text-text   font-semibold text-xl">
  <i class="fa-solid fa-door-open"></i> Exit</button>
</div>
`;
