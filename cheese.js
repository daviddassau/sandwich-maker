var SandwichMaker = (function(oldSandwichMaker){
	const cheese = {"American": 1.00, "Swiss": 1.00, "Provolone": 1.00, "None": .00};

	// Private variable to store the different meat prices
  	var cheesePrices;

	oldSandwichMaker.getCheese = function(){
		return cheese;
	};

	for(var i = 0; i < cheese.length; i++){
		if(document.getElementById("cheeseCheckboxAmerican").checked){
			var cheesePrices = cheese.American[i];
		} else if(document.getElementById("cheeseCheckboxSwiss").checked){
			var cheesePrices = cheese.Swiss[i];
		} else if(document.getElementById("cheeseCheckboxProvolone").checked){
			var cheesePrices = cheese.Provolone[i];
		} else if(document.getElementById("cheeseCheckboxNone").checked){
			var cheesePrices = cheese.None[i];
		}
	}

	return oldSandwichMaker;
})(SandwichMaker || {});