const spanId = document.querySelector("span");
const arrayEl = ["MAGNUS CLARKSON", "HIKARU", "PRAGNANANDA", "GUKESH"];
let arrayIndex = 0;

function typeWriterEffect(text, callback) {
    let charIndex = 0;
    spanId.innerHTML = ""; // Clear previous text

    function type() {
        if (charIndex < text.length) {
            spanId.innerHTML += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Adjust speed here
        } else {
            // Call the callback function when done typing
            if (callback) callback();
        }
    }
    type();
}

function displayArrayItems() {
    typeWriterEffect(arrayEl[arrayIndex], () => {
        arrayIndex++;
        if (arrayIndex >= arrayEl.length) {
            arrayIndex = 0;
        }
        // Wait for a moment before typing the next item
        setTimeout(displayArrayItems, 1200); // Adjust delay before next item here
    });
}

// Start the typewriter effect
displayArrayItems();

// const spanId = document.querySelector("span");
// const arrayEl = ["MAGNUS CLARKSON", "HIKARU", "PRAGNANANDA", "GUKESH"];
// let arrayIndex = 0;

// function displayArrayItems() {
//     // Display the current item in the array
//     spanId.innerHTML = `<span>${arrayEl[arrayIndex]}</span>`;
    
//     // Update the index for the next item
//     arrayIndex++;
    
//     // Reset the index if it exceeds the length of the array
//     if (arrayIndex >= arrayEl.length) {
//         arrayIndex = 0;
//     }
// }

// // Call the function immediately to display the first item
// displayArrayItems();

// // Set an interval to call the function every 2 seconds
// setInterval(displayArrayItems, 2000);