const experienceTab = document.querySelector("#experience-tab");
const experienceSection = document.querySelector("#experience-section");

experienceTab.addEventListener("click", () => {
  experienceSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "center",
  });
});
