/* const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const element = document.getElementById("joinBox"); */


/* modeButton.addEventListener("click", () => {
if (modeButton.textContent.includes("🌒")) {
	//main page
	main.style.background = "#000";
	if (element) {
	joinBox.style.background = "#000";
	joinBox.style.color = "#eee";
	eventBox.style.background = "#000";
	eventBox.style.color = "#eee";
	aboutBox.style.background = "#000";
	aboutBox.style.color = "#eee";
	weatherBox.style.background = "#000";
	weatherBox.style.color = "#eee";
	contactMsg.style.color = "#eee";
	contact.style.color = "#eee";
	}

	header.style.background = "#000";

	modeButton.textContent = "🌙";

} else {
	//main page
	main.style.background = "#eee";
	if (element) {
	joinBox.style.background = "#fff";
	joinBox.style.color = "#000";
	eventBox.style.background = "#fff";
	eventBox.style.color = "#000";
	aboutBox.style.background = "#fff";
	aboutBox.style.color = "#000";
	weatherBox.style.background = "#fff";
	weatherBox.style.color = "#000";
	contactMsg.style.color = "#000";
	contact.style.color = "#000";
	}

	header.style.background = "#f9faf9";

	modeButton.textContent = "🌒";
}
}); */



document.addEventListener('DOMContentLoaded', function() {
    const modeButton = document.querySelector("#mode");
    const body = document.querySelector("body");
	const main = document.querySelector("main");
	const header = document.querySelector("header");

    modeButton.addEventListener("click", () => {
        if (modeButton.textContent.includes("🌒")) {
		body.classList.toggle('dark-mode');
		modeButton.textContent = "🌙";
	}else{
		modeButton.textContent = "🌒";
		main.style.background = "#eee";
		header.style.background = "#f9faf9";
		body.classList.remove('dark-mode');
	};


    });
});
