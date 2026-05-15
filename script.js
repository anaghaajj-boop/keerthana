function showMessage0() {
    document.getElementById("hiddenMessage").style.display = "block";
    document.getElementById("bgMusic").play();
    startConfetti();
}

function startConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.innerHTML = "💙";
        confetti.style.position = "fixed";
        confetti.style.left = "50%";
        confetti.style.top = "50%";
        confetti.style.transform = "translate(-50%, -50%)";
        confetti.style.zIndex = "1000";

        // Random distance to travel
        const moveX = (Math.random() - 0.5) * 600 + "px";
        const moveY = (Math.random() - 0.5) * 900 + "px";
        
        confetti.style.setProperty('--x', moveX);
        confetti.style.setProperty('--y', moveY);

        confetti.style.fontSize = (15 + Math.random() * 20) + "px";
        confetti.style.animation = "pop 1.5s ease-out forwards";
        
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 1500);
    }
}

// Create the animation style
const styleTag = document.createElement("style");
styleTag.innerHTML = `
@keyframes pop {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
    100% { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1.2); opacity: 0; }
}
`;
document.head.appendChild(styleTag);