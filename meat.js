var SandwichMaker = (function(oldSandwichMaker){
	const meat = {"Ham": 2.00, "Turkey": 2.00, "Chicken": 2.00, "None": .00};

	// Private variable to store the different meat prices
  	var meatPrices;

	oldSandwichMaker.getMeat = function(){
		return meat;
	};

	for(var i = 0; i < meat.length; i++){
		if(document.getElementById("meatCheckboxHam").checked){
			var meatPrices = meat.Ham[i];  
		} else if(document.getElementById("meatCheckboxTurkey").checked){
			var meatPrices = meat.Turkey[i];
		} else if(document.getElementById("meatCheckboxChicken").checked){
			var meatPrices = meat.Chicken[i];
		} else if(document.getElementById("meatCheckboxNone").checked){
			var meatPrices = meat.None[i];
		}
	}

	return oldSandwichMaker;
})(SandwichMaker || {});