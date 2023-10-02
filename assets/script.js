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





let images = slides.map(slides => slides.image);
let num = 0
let mainImg = document.querySelector(".banner-img").src =
	"./assets/images/slideshow/" + images[num];



function next() {
	num++
	if (num >= images.length) {
		num =
			mainImg = mainImg + images[num]
	} else {
		mainImg = mainImg + images[num]
	}
	return next
}

function back() {

}

function dottt() {
	let dottt = images.length
	console.log(dottt)
}

let buletPoint = document.querySelector(".dot")



let flecheDroite = document.querySelector(".arrow_right")
flecheDroite.addEventListener("click", (back) => {
	
	//console.log(event.target)
})




let flecheGauche = document.querySelector(".arrow_left")
flecheGauche.addEventListener("click", (next) => {

	//console.log(event.target)
})












//document.getElementById("slider").src = "./assets/images/slideshow/" + slides[number].image;



	//console.log(event.currentTarget)//console.log(slides)//console.log(slides[0])//console.log(slides[0].image)



	/**
	 * 	for (let i = 0; i < images.length; i++) {
			console.log(images[i])
		}
	 */

	/**
	 * 	for (let i = 0; i < slides.length; i++) {
			//listImg = slides.length
			//console.log(listeImag)  4
	
			listeImag = slides[i].image
			console.log(listeImag)
		}
	
		//let tabb = Object.values(slides)
		//console.log(tabb)
	
	 */

	//console.log(slides[0].image)
	//console.log(slides[0].tagLine)
	//console.log("vous avez cliqué sur la fleche de gauche")






































/**
 * 
function changeImg(sens) {

	let elementJpg = 0;
	elementJpg = elementJpg + sens ;
	if (elementJpg > 0)
		elementJpg = +1
	if (elementJpg < 0)
		elementJpg = +1


	document.getElementById("slider").src = "./assets/images/slideshow/" + slides[elementJpg].image;
	console.log(slides[elementJpg].image)

 }










 listData = 0
	for (let i = 0; i < slides.image; i++) {
		let listData = slides[i]
	
		console.log(listData)
		//return listData 
	}
 */



/**
 * 	

	const iterator1 = slides.entries()
	console.log(iterator1.next().value) 
 
 */

/*
	

	//slides.forEach((element) => console.log(element))

	for (let element of slides) {
		element = slides.image
		console.log(slides)

	}*/


/*** function changeImg(sens) {

	let number = 0;
	number = number + sens ++;
	if (number ++ > 0)
		number = + 1
	if (number ++ < 0)
		number = + 1


	document.getElementById("slider").src = "./assets/images/slideshow/" + slides[number].image;
	console.log(slides[number].image)
 */


/**
 * 
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
 */



/*
function changeImg(sens) {

	let number = 0;
	number = number + sens ++;
	if (number ++ > 0)
		number = + 1
	if (number ++ < 0)
		number = + 1


	document.getElementById("slider")
	.src = "./assets/images/slideshow/" + slides[number].image;
	console.log(slides[number].image)

}

//console.log(slides[i].image)

*/


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
