var SandwichMaker = (function(oldSandwichMaker){
	const condiments = {"Mayo": .50, "Mustard": .50, "italianDressing": .50, "None": .00};

	// Private variable to store the different meat prices
  	var condimentPrices;

	oldSandwichMaker.getCondiments = function(){
		return condiments;
	};

	for(var i = 0; i < condiments.length; i++){
		if(document.getElementById("condiCheckboxMayo").checked){
			var condimentPrices = condiments.Mayo[i];
		} else if(document.getElementById("condiCheckboxMustard").checked){
			var condimentPrices = condiments.Mustard[i];
		} else if(document.getElementById("condiCheckboxItalian").checked){
			var condimentPrices = condiments.italianDressing[i];
		} else if(document.getElementById("condiCheckboxNone").checked){
			var condimentPrices = condiments.None[i];
		}
	}


	return oldSandwichMaker;
})(SandwichMaker || {});