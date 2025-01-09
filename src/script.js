
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
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

const experienceBtn = document.querySelector("#menu-button-experience");
experienceBtn.addEventListener("click", function () {
  document.getElementById("experience").scrollIntoView({ behavior: "smooth" });
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
      // if at the top of the screen always highlight only the info box

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

// make it so that this scroll trigger does not activate if on a mobile device

if (window.innerWidth > 1200) {
  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll(
      ".info-container, .projects-container, .experience-container, .footer-container",
    );

    sections.forEach((section) => {
      gsap.from(section, {
        duration: 1, // Duration of the animation
        opacity: 1, // Start with an opacity of 1
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
}

const g_themeToggler = document.getElementById("theme-toggler");
let g_themeToggleIcon = document.getElementById("theme-toggler-icon");

document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "light";

  // check if the theme is saved in the local storage and set the theme accordingly
  document.documentElement.setAttribute("data-theme", savedTheme);
  g_themeToggler.textContent =
    savedTheme === "dark" ? "Light Mode" : "Dark Mode";

  // function to toggle the sun and moon icons
  updateIcon(savedTheme);

  // make it so that on click we grab the data theme attribute and toggle it to either dark or light
  g_themeToggler.addEventListener("click", function () {
    // get the attribute of the data theme and switch it depeneding on what it is
    let targetTheme =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    document.documentElement.setAttribute("data-theme", targetTheme);
    g_themeToggler.textContent =
      targetTheme === "dark" ? "Light Mode" : "Dark Mode";
    localStorage.setItem("theme", targetTheme);
    updateIcon(targetTheme);
  });
});

function updateIcon(theme) {
  if (theme === "dark") {
    g_themeToggleIcon.classList.remove("fa-moon"); // Show moon in dark mode
    g_themeToggleIcon.classList.add("fa-sun");
  } else {
    g_themeToggleIcon.classList.remove("fa-sun"); // Show sun in light mode
    g_themeToggleIcon.classList.add("fa-moon");
  }
}

// Check if the page is loaded from the cache or note
window.addEventListener("pageshow", function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  // Apply the saved theme
  document.documentElement.setAttribute("data-theme", savedTheme);
  // Update the button text
  g_themeToggler.textContent =
    savedTheme === "dark" ? "Light Mode" : "Dark Mode";
  // Correctly toggle the icon
  updateIcon(savedTheme);
});
