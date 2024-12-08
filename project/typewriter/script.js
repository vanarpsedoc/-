const containerEl = document.querySelector(".container");
const careers = ["Engineer", "Gamer", "Programmer", "Developer"];
let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    // If careerIndex is at the end, reset it
    if (characterIndex === careers[careerIndex].length) {
        characterIndex = 0;
        careerIndex++;
    }

    // Reset careerIndex when reaching the end of the array
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }

    // Update the text
    const article = careers[careerIndex][0] === "E" ? "an" : "a";
    containerEl.innerHTML = `<h1> ${article} ${careers[careerIndex].slice(0, characterIndex + 1)}</h1>`;

    characterIndex++;

    // Call `updateText` again after 400ms
    setTimeout(updateText, 400);
}
