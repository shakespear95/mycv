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

const imageContainers = document.querySelectorAll('.image-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

function showImage(index) {
  imageContainers.forEach((container, i) => {
    container.style.display = (i === index) ? 'block' : 'none';
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? imageContainers.length - 1 : currentIndex - 1;
  showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === imageContainers.length - 1) ? 0 : currentIndex + 1;
  showImage(currentIndex);
});





