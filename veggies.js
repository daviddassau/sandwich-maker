var SandwichMaker = (function(oldSandwichMaker){
	const veggies = {"Lettuce": .50, "Tomatoes": .50, "Onions": .50, "None": .00};

	// Private variable to store the different meat prices
  	var veggiePrices;

	oldSandwichMaker.getVeggies = function(){
		return veggies;
	};

	for(var i = 0; i < veggies.length; i++){
		if(document.getElementById("vegCheckboxLettuce").checked){
			var veggiePrices = veggies.Lettuce[i];
		} else if(document.getElementById("vegCheckboxTomoatoes").checked){
			var veggiePrices = veggies.Tomatoes[i];
		} else if(document.getElementById("vegCheckboxOnions").checked){
			var veggiePrices = veggies.Onions[i];
		} else if(document.getElementById("vegCheckboxNone").checked){
			var veggiePrices = veggies.None[i];
		}
	}

	return oldSandwichMaker;
})(SandwichMaker || {});