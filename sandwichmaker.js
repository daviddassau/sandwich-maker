// This is the main JS file

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold the bread that the user selects
var selectedBread;

let bread = document.getElementById("breadDiv");
// console.log(bread);
let myBread = SandwichMaker.getBread();
// console.log("Bread Option", (myBread));


bread.addEventListener("change", (e) => {
	selectedBread = e.target.value;
	for(let key in myBread){
		if(selectedBread === key && e.target.checked){
			finalSandwichPrice += myBread[key];
			console.log(finalSandwichPrice);
		} else if(selectedBread === key && e.target.checked === false){
			finalSandwichPrice -= myBread[key];
			console.log(finalSandwichPrice);
		}
	}
});