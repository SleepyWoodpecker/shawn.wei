// scrolling

// // for hamburger menu that appears on the phone view
const hamburgerMenu = document.querySelector("#hamburger-menu");
const hamburgerMenuOptions = document.querySelector("#hamburger-menu-options");
const closeHamburgerMenuOptions = document.querySelector(
  "#close-hamburger-menu-options",
);

const experienceTab = document.querySelector("#experience-tab");
const experienceTabMobile = document.querySelector("#experience-tab-mobile");
const experienceSection = document.querySelector("#experience-section");

const personalProjectsTab = document.querySelector("#personal-projects-tab");
const personalProjectsTabMobile = document.querySelector(
  "#personal-projects-tab-mobile",
);
const personalProjectsSection = document.querySelector(
  "#personal-projects-section",
);

const technologiesTab = document.querySelector("#technologies-tab");
const technologiesTabMobile = document.querySelector(
  "#technologies-tab-mobile",
);
const technologiesSection = document.querySelector("#technologies-section");

const tabSectionPairs = [
  { tab: experienceTab, section: experienceSection, type: "regular" },
  { tab: experienceTabMobile, section: experienceSection, type: "mobile" },

  {
    tab: personalProjectsTab,
    section: personalProjectsSection,
    type: "regular",
  },
  {
    tab: personalProjectsTabMobile,
    section: personalProjectsSection,
    type: "mobile",
  },
  { tab: technologiesTab, section: technologiesSection, type: "regular" },
  { tab: technologiesTabMobile, section: technologiesSection, type: "mobile" },
];

const body = document.querySelector("body");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenuOptions.style.display = "block";
  // body.style.overflowY = "hidden";
  body.style.position = "fixed";
});

closeHamburgerMenuOptions.addEventListener("click", () => {
  hamburgerMenuOptions.style.display = "none";
  // body.style.overflowY = "scroll";
  body.style.position = "static";
});

for (const { tab, section, type } of tabSectionPairs) {
  tab.addEventListener("click", () => {
    if (type === "mobile") {
      hamburgerMenuOptions.style.display = "none";
      body.style.position = "static";
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  });
}

// technologies images (I did this here because I think it would be too repetitive to write out the html for each one)
const backend = document.querySelector("#backend-logos");
const devToolsAndMore = document.querySelector("#dev-tools-and-more-logos");
const frontend = document.querySelector("#frontend-logos");

const images = [
  {
    parentElement: backend,
    logos: [
      {
        link: "fastapi.svg",
        name: "FastAPI",
      },
      {
        link: "flask.svg",
        name: "Flask",
      },
      {
        link: "postgresql.svg",
        name: "PostgreSQL",
      },
      {
        link: "nodejs.svg",
        name: "Node",
      },
    ],
  },
  {
    parentElement: devToolsAndMore,
    logos: [
      { link: "docker.svg", name: "Docker" },
      { link: "git.svg", name: "Git" },
      { link: "pytorch.svg", name: "Pytorch" },
      { link: "playwright.svg", name: "Playwright" },
    ],
  },
  {
    parentElement: frontend,
    logos: [
      { link: "react.svg", name: "React" },
      { link: "tailwind.svg", name: "Tailwind" },
      { link: "html.svg", name: "HTML" },
      { link: "css.svg", name: "CSS" },
    ],
  },
];

for (const { parentElement, logos } of images) {
  for (const { link, name } of logos) {
    const wrappingDiv = document.createElement("div");
    wrappingDiv.classList.add(
      "flex",
      "flex-col",
      "jusitfy-center",
      "items-center",
      "gap-3",
      "phone:gap-5",
      "phone:h-24",
      "phone:w-24",
    );

    const logoDisplay = document.createElement("img");
    logoDisplay.src = `images/${link}`;
    logoDisplay.alt = name;
    logoDisplay.classList.add("h-16", "w-16", "phone:h-8", "phone:w-8");
    logoDisplay.loading = "lazy";

    const description = document.createElement("p");
    description.classList.add("phone:text-xs");
    description.innerText = name;

    wrappingDiv.appendChild(logoDisplay);
    wrappingDiv.appendChild(description);

    parentElement.appendChild(wrappingDiv);
  }
}
