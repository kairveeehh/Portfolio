document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Freelancer", "Coder", "UI/UX Developer", "Content writer"],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });

// Your existing JavaScript code

// Add the provided code within your existing JavaScript file

  const cc = document.getElementById("cc");

  function updateMousePosition(ev) {
    const { clientX, clientY } = ev;
    const rect = cc.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const radius = Math.min(rect.width, rect.height) / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxRadius = Math.min(rect.width, rect.height);
    const limitedRadius = Math.min(distance, maxRadius);
    cc.style.setProperty("--x", `${centerX}px`);
    cc.style.setProperty("--y", `${centerY}px`);
    cc.style.setProperty("--r", `${limitedRadius}px`);
  }

  document.addEventListener("mousemove", updateMousePosition);

  window.addEventListener("unload", function() {
    document.removeEventListener("mousemove", updateMousePosition);
  });
});

// Continue with your existing JavaScript code


