// Import GSAP from CDN
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js';
document.head.appendChild(script);

// GSAP animation for the fluid gradient
script.onload = function() {
    // Select the element to animate
    const elementToAnimate = document.querySelector('.liquid');

    // Define the animation timeline
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(elementToAnimate, {
        duration: 2,
        rotation: 360,
        ease: "power1.inOut"
    });
    console.log("Script is running...");
};