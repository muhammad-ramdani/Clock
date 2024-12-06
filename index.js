const updateClock = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    // Update hours and minutes
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;

    // Toggle colon visibility for blinking effect
    const colon = document.getElementById("colon");
    colon.style.visibility = now.getSeconds() % 2 === 0 ? "visible" : "hidden";
};

// Update clock immediately and every second
updateClock();
setInterval(updateClock, 1000);


// Toggle fullscreen mode on double click
document.body.addEventListener("dblclick", () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});
