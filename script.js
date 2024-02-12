//import GSAP
// Adding the load screen animation
function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;
    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue + "%";
    let delay = Math.floor(Math.random() * 200) + 250;
    setTimeout(updateCounter, delay);
  }
  updateCounter();
}
// Call the startLoader function when the DOM is ready
startLoader();

gsap.from(".circles", 2, {
  top: "100%",
  ease: "elastic.out",
  delay: 0.5,
});

gsap.to(".circle-inner", 1, {
  width: "75px",
  height: "75px",
  ease: "power4.inOut",
  delay: 2,
});


gsap.to(".circle-inner-rotator", 1, {
  scale: 1,
  ease: "power4.inOut",
  delay: 2.5,
});

gsap.to(".circles", 1.5, {
  rotation: 360,
  ease: "power4.inOut",
  delay: 3,
})

gsap.to(".block", 1.5, {
  rotation: 360,
  ease: "power4.inOut",
  delay: 3,
})

gsap.to(".block", 1.5, {
  rotation: 360,
  ease: "power4.inOut",
  delay: 3,
})

// // Print test
// console.log("Hello World");
