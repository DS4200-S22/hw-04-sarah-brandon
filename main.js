
function UpdateCircleClick() {
	console.log("Button was clicked");
	let old_num = document.getElementByID("num_button_clicks");
	let new_num = old_num + 1;
	old_num.innerHTML = new_num;
}