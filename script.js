function showMessage() {
    document.getElementById("hiddenMessage").style.display = "block";

    // 🎵 start music
    document.getElementById("bgMusic").play();

    startConfetti();
}

/* 🎉 CONFETTI */
function startConfetti() {
    for (let i = 0; i < 120; i++) {
        const confetti = document.createElement("div");
        confetti.innerHTML = "💙";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = (10 + Math.random() * 25) + "px";
        confetti.style.animation = "fall 3s linear forwards";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

/* falling animation */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to { transform: translateY(110vh); }
}`;
document.head.appendChild(style);