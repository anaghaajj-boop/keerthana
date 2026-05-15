function showMessage0() {
  document.getElementById("hiddenMessage").style.display = "block";
  
  // Start music (make sure you have an <audio id="bgMusic"> in HTML)
  document.getElementById("bgMusic").play();
  
  startConfetti();
}

/* --- CONFETTI LOGIC --- */
function startConfetti() {
  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement("div");
    confetti.innerHTML = "💙"; 
    confetti.style.position = "fixed";
    
    // Start exactly in the middle of the screen
    confetti.style.left = "50vw"; 
    confetti.style.top = "50vh";
    
    // Give each heart a random direction to fly toward
    const destinationX = (Math.random() - 0.5) * 800 + "px";
    const destinationY = (Math.random() - 0.5) * 800 + "px";
    confetti.style.setProperty('--x', destinationX);
    confetti.style.setProperty('--y', destinationY);

    confetti.style.fontSize = (10 + Math.random() * 25) + "px";
    confetti.style.animation = "pop 2s ease-out forwards"; 
    document.body.appendChild(confetti);

    // Remove the heart after 2 seconds so the site doesn't get slow
    setTimeout(() => {
      confetti.remove();
    }, 2000);
  }
}

/* --- ADDING THE POP ANIMATION --- */
const style = document.createElement("style");
style.innerHTML = `
@keyframes pop {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1.5);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);