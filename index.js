const professionElement = document.getElementById("profession");
const professions = [
  "I am a Telecommunications Engineer",
  "I am a Database Engineer",
  "I am an IT Specialist",
  "I am a Front-end Developer",
  "I am a Sales Representative"
];

let index = 0;

function rotateProfession() {
  professionElement.style.opacity = 0;
  setTimeout(() => {
    professionElement.textContent = professions[index];
    professionElement.style.opacity = 1;
    index = (index + 1) % professions.length;
  }, 500); // Adjust the delay time (in milliseconds) here
}

setInterval(rotateProfession, 2000); // Adjust the interval time (in milliseconds) here
