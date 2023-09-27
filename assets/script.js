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

let flecheGauche = document.querySelector(".arrow_left")
flecheGauche.addEventListener("click", () => {
	console.log("vous avez cliqué sur la fleche de gauche")
})

let flecheDroite = document.querySelector(".arrow_right")
flecheDroite.addEventListener("click", () => {
	
	console.log("vous avez cliqué sur la fleche de droite")
})







 function changeImg(sens) {
  

	let number = 0;
	number = number + sens;
	if (number > 2)
		number = 0;
	if (number < 0)
		number = 2;

document.getElementById("slider").src = "./assets/images/slideshow/" + slides[number].image;
	console.log(slides[number].image)


//console.log(slides[i].image)
}




