let currentImageIndex = 0;

let currentTagLineIndex = 0;

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const bannerContainer = document.getElementById('banner');

const imageElement = document.querySelector('.banner-img');

// Permet d'avoir un tableau: image
let images = slides.map(slides => slides.image);

// Permet d'avoir un tableau: tagLine
let tagLines = slides.map(slides => slides.tagLine);
//console.log(tagLines)

function showImage(index) {
	imageElement.src = "./assets/images/slideshow/" + images[index];
}

function showTagline(index) {
  bannerContainer.querySelector('p').innerHTML = tagLines[index];
}


function prevImage() {
	currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
	showImage(currentImageIndex);
}

function nextImage() {
	currentImageIndex = (currentImageIndex + 1) % images.length;
	showImage(currentImageIndex);
}


function prevTagline() {
  currentTagLineIndex = (currentTagLineIndex - 1 + tagLines.length) % tagLines.length;
  showTagline(currentTagLineIndex);
}

function nextTagline() {
  currentTagLineIndex = (currentTagLineIndex + 1) % tagLines.length;
  showTagline(currentTagLineIndex);
}

// Initialisation
showImage(currentImageIndex);
showTagline(currentTagLineIndex);

// Écouteurs d'événements pour les flèches


document.querySelector('.arrow_left').addEventListener('click', function() {
  prevImage();
  prevTagline();
});

document.querySelector('.arrow_right').addEventListener('click', function() {
  nextImage();
  nextTagline();
});
