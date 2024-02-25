const visitsDisplay = document.querySelector(".visitsDisplay");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    numVisits = visitsDisplay.textContent;

} else if (numVisits < 1) {
    visitsDisplay.textContent = "Back so soon! Awesome!";

} else if (numVisits == 1) {
    visitsDisplay.textContent = "You last visited" + numVisits + "day ago.";

} else if (numVisits > 1) {
    visitsDisplay.textContent = "You last visited" + numVisits + "days ago.";

} else {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);