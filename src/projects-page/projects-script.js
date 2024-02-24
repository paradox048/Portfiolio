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
// control the project-experience btns
// Button control for the project and experience toggle
const projectBtn = document.getElementById("project-page-projects-btn");
const experienceBtn = document.getElementById("project-page-experience-btn");

// on the load in make sure that the project button is active
projectBtn.classList.add("active-project-page-btn");
experienceBtn.classList.add("inactive-project-page-btn");

// on click of the project button make sure that the project button is active and the experience button is inactive
// then show the project section and hide the experience section
projectBtn.addEventListener("click", function () {
  if (projectBtn.classList.contains("inactive-project-page-btn")) {
    projectBtn.classList.remove("inactive-project-page-btn");
  }
  projectBtn.classList.add("active-project-page-btn");
  experienceBtn.classList.remove("active-project-page-btn");
  experienceBtn.classList.add("inactive-project-page-btn");

  // load in the projects section if not already loaded
  // check if the display is none and if it is then load in the projects section
});

experienceBtn.addEventListener("click", function () {
  if (experienceBtn.classList.contains("inactive-project-page-btn")) {
    experienceBtn.classList.remove("inactive-project-page-btn");
  }
  experienceBtn.classList.add("active-project-page-btn");

  projectBtn.classList.remove("active-project-page-btn");
  projectBtn.classList.add("inactive-project-page-btn");
});
