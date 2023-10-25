let currentImageIndex = 0;
let currentDotIndex = 0;

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
const elements = {
  bannerContainer: document.getElementById("banner"),
  imageElement: document.querySelector(".banner-img"),
  arrowLeft: document.querySelector(".arrow_left"),
  arrowRight: document.querySelector(".arrow_right"),
};

let images = [];
let tagLines = [];

for (const slide of slides) {
  images.push(slide.image);
  tagLines.push(slide.tagLine);
}


function showTagline(index) {
  elements.bannerContainer.querySelector("p").innerHTML = tagLines[index];
}

function updateContent(index) {
  showImage(index);
  showTagline(index);
}

function navigate(direction) {
  const newIndex =
    (currentImageIndex + direction + images.length) % images.length;
  currentImageIndex = newIndex;
  currentDotIndex = newIndex;
  updateContent(newIndex);
  updateBulletPoints();
}

updateContent(currentImageIndex);

let slideShowInterval;

function startAutomaticSlideShow() {
  slideShowInterval = setInterval(() => {
    navigate(1);
  }, 4000);
}

function stopAutomaticSlideShow() {
  clearInterval(slideShowInterval);
}

elements.arrowLeft.addEventListener("click", () => {
  navigate(-1);
  stopAutomaticSlideShow();
});

elements.arrowRight.addEventListener("click", () => {
  navigate(1);
  stopAutomaticSlideShow();
});


function showImage(index) {
  const imageElement = elements.imageElement;
  imageElement.classList.add('hide');
  setTimeout(() => {
    imageElement.src = "./assets/images/slideshow/" + images[index];
    imageElement.classList.remove('hide');
  }, 600);
}


startAutomaticSlideShow();



function createBulletPoints() {
  const bulletContainer = document.querySelector(".dots");
  bulletContainer.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    const bullet = document.createElement("div");
    bullet.classList.add("dot");
    bullet.addEventListener("click", () => navigateToSlide(i));
    bulletContainer.appendChild(bullet);

    if (i === 0) {
      bullet.classList.add("dot_selected");
    }
  }
}

function navigateToSlide(index) {
  currentImageIndex = index;
  updateContent(currentImageIndex);
  currentDotIndex = index;
  updateBulletPoints();
}

function updateBulletPoints() {
  const bullets = document.querySelectorAll(".dot");
  bullets.forEach((bullet, index) => {
    if (index === currentDotIndex) {
      bullet.classList.add("dot_selected");
    } else {
      bullet.classList.remove("dot_selected");
    }
  });
}

createBulletPoints();
