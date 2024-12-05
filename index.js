const updateClock = () => {
    document.getElementById("clock").textContent = new Date().toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit' });
};

// Update clock immediately
updateClock();

// Update clock every second
setInterval(updateClock, 1000);


// Toggle fullscreen mode on double click
document.body.addEventListener("dblclick", () => {
    if (!document.fullscreenElement) {
        // Masuk ke fullscreen
        document.documentElement.requestFullscreen();
    } else {
        // Keluar dari fullscreen
        document.exitFullscreen();
    }
});