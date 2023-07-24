import { checkAuthState } from "../common/authUser";
import { getNewByTitle } from "../../api/api";
checkAuthState();

const title = new URLSearchParams(window.location.search).get("title");
const newDetailContainer = document.querySelector("#new-detail-container");
const mainContainer = document.querySelector("#main-container");

getNewByTitle(title).then((response) => {
  console.log(title);
  const { results } = response;
  const {
    title,
    pubDate,
    source_id,
    image_url,
    description,
    content,
    category,
    country,
    link,
  } = results;

  const detail = `<div class="w-[50%]">
  <h1 class="text-text font-title text-3xl">
  ${title}
  </h1>
  <h6 class="text-text font-light">By Ignacio Gonzlez</h6>
</div>
<section class="flex gap-5">
  <div class="flex flex-col gap-2">
    <div>
      <img
        class="w-full max-w-[550px] h-[300px] rounded-xl opacity-100 hover:opacity-20 ease-in-out duration-300"
        src="${image_url}"
        alt="new-image" />
    </div>
    <ul
      class="flex gap-3 text-text justify-center font-light flex-wrap">
      <li class="bg-slate-950 p-1 rounded-lg">
        <i class="fa-regular fa-calendar fa-xs"></i>${pubDate.slice(0, 10)}
      </li>
      <li class="bg-slate-950 p-1 rounded-lg">
        <i class="fa-solid fa-location-dot fa-xs"></i>${country}
      </li>
      <li class="bg-slate-950 p-1 rounded-lg">
        <i class="fa-solid fa-hashtag fa-xs"></i>${category}
      </li>
      <li class="bg-slate-950 p-1 rounded-lg">
        <i class="fa-solid fa-pen fa-xs"></i>${source_id}
      </li>
    </ul>
  </div>
  <div class="text-text max-w-[500px] font-text">
    <p>
    ${description}
        </p>
  </div>
</section>
<section class="text-text max-w-[80%] font-text">
  <p>
    ${content}
  </p>
  <a
    class="text-accent underline"
    href="${link}">
    <i class="fa-brands fa-readme fa-xs"></i> Read More</a
  >`;
  newDetailContainer.innerHTML = detail;
  mainContainer.appendChild(newDetailContainer);
});
