// Function to update the clock
const updateClock = () => {
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, "0");
	const minutes = now.getMinutes().toString().padStart(2, "0");

	// Update hours and minutes
	document.getElementById("hours").textContent = hours;
	document.getElementById("minutes").textContent = minutes;

	// Toggle colon visibility for blinking effect
	const colon = document.getElementById("colon");
	colon.style.visibility = now.getSeconds() % 2 === 0 ? "visible" : "hidden";
};

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

// Set cursor to none after 2 seconds
let timeout = setTimeout(() => (document.body.style.cursor = "none"), 2000);

document.body.addEventListener("mousemove", () => {
	document.body.style.cursor = "default";
	clearTimeout(timeout);
	timeout = setTimeout(() => (document.body.style.cursor = "none"), 2000);
});
