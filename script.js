const talkButton = document.querySelector("#talk-button");

const aiButton = document.querySelector("#ai-button");

const startButton = document.querySelector("#start-button");


/* TALK TO SOMEONE */

if (talkButton) {

talkButton.addEventListener("click", function () {

window.location.href = "talk.html";

});

}


/* TALK TO AI */

if (aiButton) {

aiButton.addEventListener("click", function () {

alert("The AI section is coming soon!");

});

}


/* START TALKING */

if (startButton) {

startButton.addEventListener("click", function () {

window.location.href = "talk.html";

});

}
