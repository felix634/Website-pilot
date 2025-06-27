// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Select the first paragraph element within the main content area.
    // We're using querySelector to get the first matching element.
    const mainParagraph = document.querySelector('main p');

    // Check if the paragraph element exists before trying to modify it.
    if (mainParagraph) {
        // Use setTimeout to execute a function after a specified delay (in milliseconds).
        // 5000 milliseconds = 5 seconds.
        setTimeout(() => {
            // Change the text content of the paragraph.
            mainParagraph.textContent = "This text has been dynamically changed by JavaScript after 5 seconds! Isn't that cool?";

            // Optionally, you can also add some styling changes after the update
            // mainParagraph.style.color = "#ef4444"; // Example: change text color to red
            // mainParagraph.style.fontWeight = "bold"; // Example: make text bold
        }, 5000); // 5000 milliseconds = 5 seconds
    } else {
        // Log a message to the console if the paragraph element is not found,
        // which can be helpful for debugging.
        console.log("Paragraph element not found in the 'main' section.");
    }
});
