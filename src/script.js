// when the button is clicked navigate to one part of the page
const aboutBtn = document.querySelector("#menu-button-info");
aboutBtn.addEventListener("click", function () {
  // go to the top of the page
  // top of the page
  // window.location.href = "#info";
  scrollTo(0, 0);
  history.pushState(null, null, "#info");
});

const projectsBtn = document.querySelector("#menu-button-projects");
projectsBtn.addEventListener("click", function () {
  window.location.href = "#projects";
});

const experiencebtn = document.querySelector("#menu-button-experience");
experiencebtn.addEventListener("click", function () {
  window.location.href = "#experience";
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = {
    "menu-button-info": "info",
    "menu-button-projects": "projects",
    "menu-button-experience": "experience",
  };

  function checkSectionInView() {
    let maxVisibleHeight = 0; // Track the maximum visible height of the sections
    let activeSectionId = ""; // Track the ID of the section that has the maximum visible height

    Object.keys(buttons).forEach((buttonId) => {
      const sectionId = buttons[buttonId];
      const section = document.getElementById(sectionId);
      const rect = section.getBoundingClientRect();

      // Calculate the visible height of the section
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

      // Update if this section is more visible than the previous most visible section
      if (visibleHeight > maxVisibleHeight) {
        maxVisibleHeight = visibleHeight;
        activeSectionId = buttonId;
      }
    });

    // Highlight only the button corresponding to the most visible section
    Object.keys(buttons).forEach((buttonId) => {
      const button = document.getElementById(buttonId);
      if (buttonId === activeSectionId) {
        button.classList.add("button-active");
      } else {
        button.classList.remove("button-active");
      }
    });
  }

  // Check initially and then on scroll
  checkSectionInView();
  window.addEventListener("scroll", checkSectionInView);
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const sections = document.querySelectorAll(
    ".info-container, .projects-container, .experience-container, .footer-container",
  );

  sections.forEach((section) => {
    gsap.from(section, {
      duration: 1, // Duration of the animation
      opacity: 0, // Start with an opacity of 0
      y: 50, // Start 50 pixels down from its original position
      ease: "easeInOut", // Use an easing function for a smooth effect
      scrollTrigger: {
        trigger: section,
        start: "top 75%", // Start the animation when the top of the section hits 75% of the viewport height
        end: "bottom 25%", // Animation end trigger
        // This means the animation will play on enter, reverse on leave, play in reverse on enter back, and reverse again on leave back
        toggleActions: "play reverse play reverse",
      },
    });
  });
});
