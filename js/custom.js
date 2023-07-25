gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

// Wait for the DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    // GSAP animation
    gsap.to(".bg-logo", {
      x: "+=50", // Move 50 pixels to the right
      duration: 1, // Animation duration in seconds
      ease: "power2.out", // Easing function for the animation (optional)
    });
  });