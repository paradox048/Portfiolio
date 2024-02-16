// //import GSAP
// // Adding the load screen animation
// function startLoader() {
//   let counterElement = document.querySelector(".counter");
//   let currentValue = 0;

//   function updateCounter() {
//     if (currentValue === 100) {
//       return;
//     }

//     currentValue += Math.floor(Math.random() * 10) + 1;
//     if (currentValue > 100) {
//       currentValue = 100;
//     }

//     counterElement.textContent = currentValue + "%";
//     let delay = Math.floor(Math.random() * 200) + 250;
//     setTimeout(updateCounter, delay);
//   }
//   updateCounter();
// }
// // Call the startLoader function when the DOM is ready
// startLoader();

// gsap.from(".circles", 2, {
//   top: "100%",
//   ease: "elastic.out",
//   delay: 0.5,
// });

// gsap.to(".circle-inner", 1, {
//   width: "75px",
//   height: "75px",
//   ease: "power4.inOut",
//   delay: 2,
// });


// gsap.to(".circle-inner-rotator", 1, {
//   scale: 1,
//   ease: "power4.inOut",
//   delay: 2.5,
// });

// gsap.to(".circles", 1.5, {
//   rotation: 360,
//   ease: "power4.inOut",
//   delay: 3,
// })

// gsap.to(".block", 0.75, {
//   display: "block",
//   height: "200px",
//   ease: "power4.inOut",
//   delay: 4,
// })

// gsap.to(".block", 0.75, {
//   width: "800px",
//   ease: "power4.inOut",
//   delay: 4.5,
// })

// gsap.fromTo(".site-container", {
//   duration: 2,
//   left: "100%",
//   scale: 0.5, 
//   ease: "power4.inOut",
//   delay: 4,
// },
// {
//   duration: 2,
//   left: "50%",
//   scale: 0.5,
//   transform: "translateX(-50%)",
//   ease: "power4.inOut",
//   delay: 4,
// });

// gsap.to(".block", 1.5, {
//   width: "0px",
//   ease: "power4.inOut",
//   delay: 5,
// });

// gsap.to(".block", 1.5, {
//   height: "0px",
//   ease: "power4.inOut",
//   delay: 6,
// });


// gsap.to (".circles", 1.5, {
//   rotation: 0,
//   ease: "power4.inOut",
//   delay: 6.5,
// })

// gsap.to(".site-container", 2, {
//     scale: 1,
//   ease: "power4.inOut",
//   delay: 7,
// });


// when the button is clicked navigate to one part of the page
const aboutBtn = document.querySelector("#menu-button-info");
aboutBtn.addEventListener("click", function() {
  window.location.href = "#about";
});

const projectsBtn = document.querySelector("#menu-button-projects");
projectsBtn.addEventListener("click", function() {
  window.location.href = "#projects";
});

document.addEventListener('DOMContentLoaded', function() {
  const buttons = {
    'menu-button-info': 'about',
    'menu-button-projects': 'projects',
    // Add more button IDs and their corresponding section IDs as needed
  };

  function checkSectionInView() {
    Object.keys(buttons).forEach(buttonId => {
      const sectionId = buttons[buttonId];
      const button = document.getElementById(buttonId);
      const section = document.getElementById(sectionId);

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;
      
      // Check if the section is in view
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        button.classList.add('button-active');
      } else {
        button.classList.remove('button-active');
      }
    });
  }

  // Initial check in case the page loads and a section is already in view
  checkSectionInView();

  // Check on scroll
  window.addEventListener('scroll', checkSectionInView);
});

