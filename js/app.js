const dynamicText = document.getElementById("dynamic-text");

// Words to type out
const words = ["apps", "solutions", "dreams", "code"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  // Update the visible text
  dynamicText.textContent = currentWord.substring(0, letterIndex);

  // Typing speed control
  let typingSpeed = isDeleting ? 50 : 120; // Characters per millisecond

  // Adjust typing or deleting process
  if (!isDeleting && letterIndex < currentWord.length) {
    letterIndex++; // Typing characters
  } else if (!isDeleting && letterIndex === currentWord.length) {
    // Pause before deleting
    if (currentWord === "code") {
      typingSpeed = 5000; // Longer pause for "code"
    } else {
      typingSpeed = 1000; // Default pause for other words
    }
    isDeleting = true;
  }  else if (isDeleting && letterIndex > 0) {
    letterIndex--; // Deleting characters
  } else if (isDeleting && letterIndex === 0) {
    // Finished deleting, move to the next word
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Loop through words
  }

  // Repeat with adjusted speed
  setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
typeEffect();
