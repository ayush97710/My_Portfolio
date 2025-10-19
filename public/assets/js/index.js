// Typing animation effect
const textArray = ["Web Developer", "Android Developer", "UI Designer", "IT & Digital Marketing"];
let typingElem = document.querySelector(".typing");
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typingElem.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElem.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => setTimeout(type, 500));
