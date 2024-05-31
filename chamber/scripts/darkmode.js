const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const joinBox = document.querySelector("#joinBox");
const eventBox = document.querySelector("#eventBox");
const aboutBox = document.querySelector("#aboutBox");
const weatherBox = document.querySelector("#weatherBox");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌒")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		header.style.background = "#000";
		header.style.color = "#fff";
		joinBox.style.background = "#000";
		joinBox.style.color = "#fff";
		eventBox.style.background = "#000";
		eventBox.style.color = "#fff";
		aboutBox.style.background = "#000";
		aboutBox.style.color = "#fff";
		weatherBox.style.background = "#000";
		weatherBox.style.color = "#fff";
		modeButton.textContent = "🌙";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		header.style.background = "#eee";
		header.style.color = "#000";
		joinBox.style.background = "#eee";
		joinBox.style.color = "#000";
		eventBox.style.background = "#eee";
		eventBox.style.color = "#000";
		aboutBox.style.background = "#eee";
		aboutBox.style.color = "#000";
		weatherBox.style.background = "#eee";
		weatherBox.style.color = "#000";
		modeButton.textContent = "🌒";
	}
});
