let currentImageIndex = 0;
let currentDotIndex = 0;


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
const elements = {
	bannerContainer: document.getElementById('banner'),
	imageElement: document.querySelector('.banner-img'),
	arrowLeft: document.querySelector('.arrow_left'),
	arrowRight: document.querySelector('.arrow_right')
};

let images = [];
let tagLines = [];

for (const slide of slides) {
	images.push(slide.image);
	tagLines.push(slide.tagLine);
}

function showImage(index) {
	elements.imageElement.src = "./assets/images/slideshow/" + images[index];
}

function showTagline(index) {
	elements.bannerContainer.querySelector('p').innerHTML = tagLines[index];
}

function updateContent(index) {
	showImage(index);
	showTagline(index);
}

function navigate(direction) {
	const newIndex = (currentImageIndex + direction + images.length) % images.length;
	currentImageIndex = newIndex;
	currentDotIndex = newIndex;
	updateContent(newIndex);
	updateBulletPoints(); 
}


updateContent(currentImageIndex);

elements.arrowLeft.addEventListener('click', () => navigate(-1));
elements.arrowRight.addEventListener('click', () => navigate(1));




function createBulletPoints() {
	const bulletContainer = document.querySelector('.dots');
	bulletContainer.innerHTML = '';

	for (let i = 0; i < images.length; i++) {
		const bullet = document.createElement('div');
		bullet.classList.add('dot');
		bullet.addEventListener('click', () => navigateToSlide(i));
		bulletContainer.appendChild(bullet);
	}
}


function navigateToSlide(index) {
	currentImageIndex = index;
	updateContent(currentImageIndex);
	currentDotIndex = index; 
	updateBulletPoints();
}


function updateBulletPoints() {
	const bullets = document.querySelectorAll('.dot');
	bullets.forEach((bullet, index) => {
		if (index === currentDotIndex) {
			bullet.classList.add('dot_selected');
		} else {
			bullet.classList.remove('dot_selected');
		}
	});
}





createBulletPoints();


/**
 * let currentImageIndex = 0;

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





function createBulletPoints() {
 const bulletContainer = document.querySelector('.dots');
 bulletContainer.innerHTML = ''; // Efface les anciens bullet points

 for (let i = 0; i < images.length; i++) {
	 const bullet = document.createElement('div');
	 //console.log(EventTarget)
	 bullet.classList.add('dot');
	 bullet.addEventListener('click', () => navigateToSlide(i));
	 bulletContainer.appendChild(bullet);
 }
}

function navigateToSlide(index) {
 currentImageIndex = index;
 updateContent(currentImageIndex);
 updateBulletPoints();
}

function updateBulletPoints() {
 const bullets = document.querySelectorAll('.dot');
 bullets.forEach((bullet, index) => {
	 if (index === currentImageIndex) {
		 bullet.classList.add('active');
	 } else {
		 bullet.classList.remove('active');
	 }
 });
}



createBulletPoints();


 * 
 */
