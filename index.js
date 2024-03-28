const experienceTab = document.querySelector("#experience-tab");
const experienceSection = document.querySelector("#experience-section");

const personalProjectsTab = document.querySelector("#personal-projects-tab");
const personalProjectsSection = document.querySelector(
  "#personal-projects-section",
);

const technologiesTab = document.querySelector("#technologies-tab");
const technologiesSection = document.querySelector("#technologies-section");

const tabSectionPairs = [
  { tab: experienceTab, section: experienceSection },
  { tab: personalProjectsTab, section: personalProjectsSection },
  { tab: technologiesTab, section: technologiesSection },
];

for (const { tab, section } of tabSectionPairs) {
  tab.addEventListener("click", () => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  });
}
