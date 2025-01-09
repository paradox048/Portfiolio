var confettiSettings = { target: 'my-canvas' };
var confetti;

// Confetti effect initialization and control
function triggerConfetti() {
    var canvas = document.getElementById('my-canvas');
    canvas.style.zIndex = 9999; // Bring the canvas to the front

    // Reinitialize confetti each time to ensure it works on every click
    confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    setTimeout(function () {
        confetti.clear();
        canvas.style.zIndex = -1; // Send the canvas back after the confetti effect
    }, 5000); // 5000 milliseconds = 5 seconds
}

// Trigger the confetti effect when the Acknowledgements header is clicked
acknowledgementHeader = document.querySelector('.acknowledgements .student-technician-page_headers');
acknowledgementHeader.addEventListener('click', function () {
    //Only present the confetti if the acknowledgements is open
    if (!acknowledgementHeader.classList.contains('active')) {
        triggerConfetti();
    }
});

// Theme toggler
const themeToggler = document.getElementById("theme-toggler");
const themeToggleIcon = document.getElementById("theme-toggler-icon");

themeToggler.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const targetTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
    themeToggleIcon.className = targetTheme === "dark" ? "far fa-sun" : "far fa-moon";
    themeToggler.textContent = targetTheme === "dark" ? "Light Mode" : "Dark Mode";
});

const currentTheme = document.documentElement.getAttribute("data-theme");
themeToggleIcon.className = currentTheme === "dark" ? "far fa-sun" : "far fa-moon";
themeToggler.textContent = currentTheme === "dark" ? "Light Mode" : "Dark Mode";

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

// Active header management
const headers = document.querySelectorAll('.student-technician-page_headers');
if (headers.length > 0) {
    headers[0].classList.add('active');
}

headers.forEach(header => {
    header.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});