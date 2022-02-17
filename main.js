// let num = 0;
// num = addOne(num);
// console.log(num)


// function addOne(num) {
// 	num = num + 1
// 	return num
// }

function UpdateCircleClick() {

	console.log("Button was clicked");

	// var button = document.getElementById("btn");
	// var text1 = document.getElementById("text1");

	// button.addEventListener('click', handleEvent: function (event) {
 //  		funcOutput.textContent = 'Element clicked through function!';
	// });

	// let newNum = parseInt(text1) + 1
	// text1.innerHTML = newNum;
}

function disappearCircle() {
	var circle = document.getElementById("circle3");
	circle.style.display = "none";
}

function border() {
	var border = document.getElementById("circle2");
	border.style.stroke = "black";
	border.style.stroke_width = "4px"
}

function noborder(){
	var border = document.getElementById("circle2");
	border.style.stroke = "none";
}