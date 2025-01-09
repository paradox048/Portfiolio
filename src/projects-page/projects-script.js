
const g_themeToggler = document.getElementById("theme-toggler");
let g_themeToggleIcon = document.getElementById("theme-toggler-icon");

document.addEventListener("DOMContentLoaded", function () {
    // Back button hover effect
    const backButton = document.getElementById("back-button");
    let firstHover = true;
    
    backButton.addEventListener("mouseover", function () {
        if (firstHover) {
            backButton.classList.add("rotate-once");
            backButton.addEventListener("animationend", function () {
                backButton.classList.remove("rotate-once");
            });
            firstHover = false;
        }
    });

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

  if (
    document.getElementById("projects-page-projects_list").style.display !==
    "none"
  ) {
    animateTableRows("projects-page-projects_list");
  } else {
    animateTableRows("projects-page-experience_list");
  }
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
projectHeading = document.getElementById("projects-page-heading-changing_text");
document.getElementById("projects-page-experience_list").style.display = "none";

// on click of the project button make sure that the project button is active and the experience button is inactive
// then show the project section and hide the experience section
projectBtn.addEventListener("click", function () {
  if (projectBtn.classList.contains("inactive-project-page-btn")) {
    projectBtn.classList.remove("inactive-project-page-btn");
  }

  // display the list if display is none
  if (
    document.getElementById("projects-page-projects_list").style.display ===
    "none"
  ) {
    document.getElementById("projects-page-projects_list").style.display =
      "block";
    document.getElementById("project-subheading").style.display = "block";
  }

  projectBtn.classList.add("active-project-page-btn");
  experienceBtn.classList.remove("active-project-page-btn");
  experienceBtn.classList.add("inactive-project-page-btn");
  projectHeading.textContent = "Projects";
  document.getElementById("projects-page-experience_list").style.display =
    "none";
  document.getElementById("experience-subheading").style.display = "none";
  animateTableRows("projects-page-projects_list");
});

experienceBtn.addEventListener("click", function () {
  if (experienceBtn.classList.contains("inactive-project-page-btn")) {
    experienceBtn.classList.remove("inactive-project-page-btn");
  }

  // display the list if display is none
  if (
    document.getElementById("projects-page-experience_list").style.display ===
    "none"
  ) {
    document.getElementById("projects-page-experience_list").style.display =
      "block";
  }
  document.getElementById("experience-subheading").style.display = "block";
  experienceBtn.classList.add("active-project-page-btn");

  projectBtn.classList.remove("active-project-page-btn");
  projectBtn.classList.add("inactive-project-page-btn");
  projectHeading.textContent = "Experience";

  // hide the projects section and show the experience section
  document.getElementById("projects-page-projects_list").style.display = "none";
  // change projects-page-subheading to new blurb
  // change the subheading to the new blurb
  document.getElementById("project-subheading").style.display = "none";
  animateTableRows("projects-page-experience_list");
});

// make the text My target to home

function animateTableRows(tableId) {
  // Select all table rows within the specified table
  gsap.fromTo(
    `#${tableId} tr`,
    { y: 20, opacity: 0 }, // Starting position - slightly down and invisible
    {
      y: 0,
      opacity: 1,
      stagger: 0.1, // Stagger the start of each animation
      duration: 0.5, // Duration of each animation
      ease: "power1.out", // Easing function for a smooth effect
    },
  );
}
