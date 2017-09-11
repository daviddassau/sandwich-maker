// This is the main JS file

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

var sandwichTotal = document.getElementById("sandwichTotal");


var selectedBread; // Variable to hold the bread that the user selects
let bread = document.getElementById("breadDiv"); // Getting the bread div from html
let myBread = SandwichMaker.getBread(); // Get the getBread getter from bread.js

bread.addEventListener("change", (e) => {
	selectedBread = e.target.value;
	for(let key in myBread){
		if(selectedBread === key && e.target.checked){
			finalSandwichPrice += myBread[key];
			sandwichTotal.innerHTML = '$' + finalSandwichPrice;
		} else if(selectedBread === key && e.target.checked === false){
			finalSandwichPrice -= myBread[key];
			sandwichTotal.innerHTML = '$' + finalSandwichPrice;
		}
	}
});


var selectedMeat; // Variable to hold the meat that the user selects
let meat = document.getElementById("meatDiv"); // Getting the meat div from html
let myMeat = SandwichMaker.getMeat(); // Get the getMeat getter from meat.js

meat.addEventListener("change", (e) => {
	selectedMeat = e.target.value;
	for(let key in myMeat){
		if(selectedMeat === key && e.target.checked){
			finalSandwichPrice += myMeat[key];
			sandwichTotal.innerHTML = '$' + finalSandwichPrice;
		} else if(selectedMeat === key && e.target.checked === false){
			finalSandwichPrice -= myMeat[key];
			sandwichTotal.innerHTML = '$' + finalSandwichPrice;
		}
	}
});


var selectedCheese; // Variable to hold the cheese that the user selects
let cheese = document.getElementById("cheeseDiv"); // Getting the cheese div from html
let myCheese = SandwichMaker.getCheese(); // Get the getCheese getter from cheese.js

cheese.addEventListener("change", (e) => {
	selectedCheese = e.target.value;
	for(let key in myCheese){
		if(selectedCheese === key && e.target.checked){
			finalSandwichPrice += myCheese[key];
			sandwichTotal.innerHTML = '$' + finalSandwichPrice;
		} else if(selectedCheese === key && e.target.checked === false){
			finalSandwichPrice -= myCheese[key];
			sandwichTotal.innerHTML = '$' + finalSandwichPrice;
		}
	}
});


var selectedCondiments; // Variable to hold the condiments that the user selects
let condiments = document.getElementById("condimentsDiv"); // Getting the condiments div from html
let myCondiments = SandwichMaker.getCondiments(); // Get the getCondiments getter from condiments.js

condiments.addEventListener("change", (e) => {
	selectedCondiments = e.target.value;
	for(let key in myCondiments){
		if(selectedCondiments === key && e.target.checked){
			finalSandwichPrice += myCondiments[key];
			sandwichTotal.innerHTML = '$' + finalSandwichPrice;
		} else if(selectedCondiments === key && e.target.checked === false){
			finalSandwichPrice -= myCondiments[key];
			sandwichTotal.innerHTML = '$' + finalSandwichPrice;
		}
	}
});


var selectedVeggies; // Variable to hold the veggies that the user selects
let veggies = document.getElementById("veggiesDiv"); // Getting the veggies div from html
let myVeggies = SandwichMaker.getVeggies(); // Get the getCondiments getter from veggies.js

veggies.addEventListener("change", (e) => {
	selectedVeggies = e.target.value;
	for(let key in myVeggies){
		if(selectedVeggies === key && e.target.checked){
			finalSandwichPrice += myVeggies[key];
			sandwichTotal.innerHTML = '$' + finalSandwichPrice;
		} else if(selectedVeggies === key && e.target.checked === false){
			finalSandwichPrice -= myVeggies[key];
			sandwichTotal.innerHTML = '$' + finalSandwichPrice;
		}
	}
});











