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


	//console.log(slides[i].image)
	console.log("vous avez cliqué sur la fleche de gauche")
})



let val = slides.values();

for (let i of val) {
  console.log(i);
}

listData = 0
for (let i = 0; i < slides.length; i++) {
	let listData = slides[i]

	console.log(listData)
}

listImg = 0
for(let i = 0; i < slides.length; i++) {
	let listImg = slides.length[i]
	console.log(listImg)
}

let flecheDroite = document.querySelector(".arrow_right")
flecheDroite.addEventListener("click", () => {

	console.log("vous avez cliqué sur la fleche de droite")
})




function changeImg(sens) {

	let number = 0;
	number = number + sens;
	if (number > 0)
		number = + 1
	if (number < 0)
		number = + 1


	document.getElementById("slider").src = "./assets/images/slideshow/" + slides[number].image;
	console.log(slides[number].image)

}

//console.log(slides[i].image)







/**
 * 
let sliderImg = document.getElementById("slider")
let image
let i = 0

function left() {
	if(i <= 0) i = slides.length.image;
	i--;
	return setImg() 
}

function right () {
	if(i >= slides.length.image - 1) i = -1
	i++
	return setImg()
}

function setImg() {
	return sliderImg.setAttribute('src', "./assets/images/slideshow/" + setImg[i].image)
}

console.log(slides[i].image)

 */







