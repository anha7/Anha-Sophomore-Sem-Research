// Variables corresponding to each title
const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const title3 = document.getElementById("title3");
const title4 = document.getElementById("title4");
const author = document.getElementById("author");

// Run animation on title sequences
openAnim();

// Animate title sequences
function openAnim() {
    title1.classList.add("opacity");
    title2.classList.add("opacity");
    title3.classList.add("opacity");
    title4.classList.add("opacity");
    author.classList.add("opacity");
}