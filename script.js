// Select the Projects menu item and add a click event listener
document.querySelector('.menu-item-projects').addEventListener('click', function() {
    var projectsMenu = document.getElementById('projects-menu');
    
    // Toggle the menu's visibility using GSAP
    if (projectsMenu.classList.contains('hidden')) {
      // Remove the 'hidden' class and animate the menu into view
      projectsMenu.classList.remove('hidden');
      gsap.to(projectsMenu, { duration: 0.5, xPercent: -100, ease: 'power1.out' });
    } else {
      // Animate the menu out of view and then add the 'hidden' class back
      gsap.to(projectsMenu, { duration: 0.5, xPercent: 100, ease: 'power1.in', onComplete: () => projectsMenu.classList.add('hidden') });
    }
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    const projectsMenu = document.getElementById('projects-menu');
    if (projectsMenu) {
      projectsMenu.classList.add('hidden');
    }
  });
  
  
//   Adds event listener to the menu so that an underline can appear \
// Under the item

document.querySelector('menu-container').addEventListnet('click', function(e) {
    if (e.target.classList.contains('menu-item')) {
        document.querySelector('.menu-item.active').classList.remove('active');
        e.target.classList.add('active');
    }
});

gsap.to("#whirlpool", {
    rotation: 360,
    duration: 5,
    repeat: -1, // This makes the animation loop infinitely
    ease: "linear",
    transformOrigin: "50% 50%" // Ensures the whirlpool spins around its center
});
