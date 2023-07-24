import { checkAuthState } from "../common/authUser.js";
import {
  getLatestNews,
  getNewsByTech,
  getNewsByPolitics,
} from "../../api/api.js";
import { parse } from "postcss";

const desktopNav = document.querySelector(".desktop-navbar");
const latestNewsContainer = document.querySelector("#news-container");
const nextPageBtn = document.querySelector("#next-page-btn");
const prevPageBtn = document.querySelector("#prev-page-btn");
const numberPage = document.querySelector("#number-page");
const numberPageTech = document.querySelector("#number-page-tech");
const nextPageTech = document.querySelector("#next-page-tech");
const prevPageTech = document.querySelector("#prev-page-tech");
const nextPagePolitics = document.querySelector("#next-page-politics");
const prevPagePolitics = document.querySelector("#prev-page-politics");
const numberPagePolitics = document.querySelector("#number-page-politics");
const techContainer = document.querySelector("#tech-container");
const politicsContainer = document.querySelector("#politics-container");
const pages = [];
const pagesTech = [];
const pagesPolitics = [];
checkAuthState();

window.addEventListener("scroll", () => {
  desktopNav.classList.toggle("sticky", window.scrollY > 0);
});

nextPageBtn.addEventListener("click", () => {
  numberPage.textContent = parseInt(numberPage.textContent) + 1;
  checkNumberPage(parseInt(numberPage.textContent), prevPageBtn);
  latestNewsContainer.innerHTML = "";
  getLatestNews("en", pages[pages.length - 1]).then((response) => {
    const { nextPage } = response;
    pages.push(nextPage);
    const { results } = response;
    results.forEach((info) => {
      if (info.image_url !== null) {
        createNewCard(info);
      }
    });
  });
});

prevPageBtn.addEventListener("click", () => {
  numberPage.textContent = parseInt(numberPage.textContent) - 1;
  checkNumberPage(parseInt(numberPage.textContent), prevPageBtn);
  latestNewsContainer.innerHTML = "";
  if (parseInt(numberPage.textContent) === 1) {
    getLatestNews().then((response) => {
      const { nextPage } = response;
      pages.push(nextPage);

      const { results } = response;
      results.forEach((info) => {
        if (info.image_url !== null) {
          createNewCard(info);
        }
      });
    });
  } else {
    getLatestNews("en", pages[parseInt(numberPage.textContent) - 1]).then(
      (response) => {
        const { nextPage } = response;
        pages.push(nextPage);
        const { results } = response;
        results.forEach((info) => {
          if (info.image_url !== null) {
            createNewCard(info);
          }
        });
      }
    );
  }
});

nextPageTech.addEventListener("click", () => {
  numberPageTech.textContent = parseInt(numberPageTech.textContent) + 1;
  checkNumberPage(parseInt(numberPageTech.textContent), prevPageTech);
  techContainer.innerHTML = "";
  getNewsByTech("en", pagesTech[pagesTech.length - 1]).then((response) => {
    const { nextPage } = response;
    pagesTech.push(nextPage);
    const { results } = response;
    results.forEach((info) => {
      if (info.image_url !== null) {
        createShortCard(info, techContainer);
      }
    });
  });
});

prevPageTech.addEventListener("click", () => {
  numberPageTech.textContent = parseInt(numberPageTech.textContent) - 1;
  checkNumberPage(parseInt(numberPageTech.textContent), prevPageTech);
  techContainer.innerHTML = "";
  if (parseInt(numberPageTech.textContent) === 1) {
    getNewsByTech().then((response) => {
      const { nextPage } = response;
      pagesTech.push(nextPage);
      const { results } = response;
      results.forEach((info) => {
        if (info.image_url !== null) {
          createShortCard(info, techContainer);
        }
      });
    });
  } else {
    getNewsByTech(
      "en",
      pagesTech[parseInt(numberPageTech.textContent) - 1]
    ).then((response) => {
      const { nextPage } = response;
      pagesTech.push(nextPage);
      const { results } = response;
      results.forEach((info) => {
        if (info.image_url !== null) {
          createShortCard(info, techContainer);
        }
      });
    });
  }
});

nextPagePolitics.addEventListener("click", () => {
  numberPagePolitics.textContent = parseInt(numberPagePolitics.textContent) + 1;
  checkNumberPage(parseInt(numberPagePolitics.textContent), prevPagePolitics);
  politicsContainer.innerHTML = "";
  getNewsByPolitics("en", pagesPolitics[pagesPolitics.length - 1]).then(
    (response) => {
      const { nextPage } = response;
      pagesPolitics.push(nextPage);

      const { results } = response;
      results.forEach((info) => {
        if (info.image_url !== null) {
          createShortCard(info, politicsContainer);
        }
      });
    }
  );
});

prevPagePolitics.addEventListener("click", () => {
  numberPagePolitics.textContent = parseInt(numberPagePolitics.textContent) - 1;
  checkNumberPage(parseInt(numberPagePolitics.textContent), prevPagePolitics);
  politicsContainer.innerHTML = "";
  if (parseInt(numberPagePolitics.textContent) === 1) {
    getNewsByPolitics().then((response) => {
      const { nextPage, results } = response;
      pagesPolitics.push(nextPage);
      results.forEach((info) => {
        if (info.image_url !== null) {
          createShortCard(info, politicsContainer);
        }
      });
    });
  } else {
    getNewsByPolitics(
      "en",
      pagesPolitics[parseInt(numberPagePolitics.textContent) - 1]
    ).then((response) => {
      const { nextPage, results } = response;
      pagesPolitics.push(nextPage);
      results.forEach((info) => {
        if (info.image_url !== null) {
          createShortCard(info, politicsContainer);
        }
      });
    });
  }
});

getLatestNews().then((response) => {
  const { nextPage } = response;
  pages.push(nextPage);
  const { results } = response;
  results.forEach((info) => {
    if (info.image_url !== null) {
      createNewCard(info);
    }
  });
});

// getNewsByTech().then((response) => {
//   const { nextPage } = response;
//   pagesTech.push(nextPage);
//   const { results } = response;
//   results.forEach((info) => {
//     if (info.image_url !== null) {
//       createShortCard(info, techContainer);
//     }
//   });
// });

// getNewsByPolitics().then((response) => {
//   const { nextPage, results } = response;
//   pagesPolitics.push(nextPage);

//   results.forEach((info) => {
//     if (info.image_url !== null) {
//       createShortCard(info, politicsContainer);
//     }
//   });
// });

const checkNumberPage = (page, prevPage) => {
  if (page === 1) {
    prevPage.classList.add("hidden");
  } else {
    prevPage.classList.remove("hidden");
  }
};
checkNumberPage(parseInt(numberPage.textContent), prevPageBtn);
checkNumberPage(parseInt(numberPageTech.textContent), prevPageTech);
checkNumberPage(parseInt(numberPagePolitics.textContent), prevPagePolitics);

const createNewCard = (info) => {
  const { title, description, image_url, pubDate } = info;
  const newContainer = document.createElement("div");
  newContainer.classList.add(
    "bg-slate-950",
    "rounded-md",
    "p-3",
    "w-[98%]",
    "max-w-[725px]",
    "flex",
    "flex-col"
  );

  newContainer.innerHTML = `
  <div
  id="new-image-container"
  class="p-2 relative rounded-sm max-h-[400px]">
  <img
      draggable="false"
      src="${image_url}"
      class="w-full h-full rounded-xl opacity-100"
      alt="image" />
      <a
      href="./new-detail.html?title=${title}"
      class="text-text opacity-60 bg-black hover:border-2 hover:border-accent border-2 hover:opacity-100 border-transparent transition-[border] duration-200 ease-out rounded-md p-1 flex items-center w-[150px] justify-around absolute right-3 top-4 z-[80]">
      <i class="fa-regular fa-eye fa-lg text-accent"></i>
      View more
    </a>
</div>
  <div
    id="new-info"
    class="flex flex-col gap-3 w-full text-text items-start px-7 justify-center">
   
    <p class="text-text font-text text-lg">${pubDate.slice(0, 10)}</p>
    <h1 class="font-title text-2xl">${title}</h1>
    <p class="font-text text-lg">
      ${description}
    </p>
  </div>
  
  `;

  latestNewsContainer.appendChild(newContainer);
};

const createShortCard = (info, parentContainer) => {
  const { title, image_url } = info;

  const container = document.createElement("div");
  container.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "flex-wrap",
    "p-2",
    "rounded-md",
    "bg-slate-950",
    "max-w-[335px]"
  );

  container.innerHTML = `
  <div id="new-image-container" class="p-2  relative  rounded-sm">
  <img
    draggable="false"
    src="${image_url}"
    class="w-full h-full rounded-xl   opacity-100"
    alt="image" />
    <a
      href="./new-detail.html?title=${title}"  
      class="text-text absolute opacity-60 bg-black hover:border-2 hover:border-accent border-2 hover:opacity-100 border-transparent transition-[border] duration-200 ease-out rounded-md p-1 flex items-center w-[35px] h-[30px] justify-around right-3 top-3 z-[80]">
      <i class="fa-regular fa-eye fa-lg text-accent"></i>
    </a>
  </div>
  <div class="flex w-full justify-evenly items-center gap-2">
    <h4 class="font-title text-2xl text-text">${title}</h4>
  </div>
  `;
  parentContainer.appendChild(container);
};
