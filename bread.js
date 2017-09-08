var SandwichMaker = (function(oldSandwichMaker){
	const bread = {"White": 2.00, "Wheat": 2.00, "Asiago": 3.00, "None": .00};

	// Private variable to store the different bread prices
  	var breadPrices;

	oldSandwichMaker.getBread = function(){
		return bread;
	};

	for(var i = 0; i < bread.length; i++){
		if(document.getElementById("breadCheckboxWhite").checked){
			var breadPrices = bread.White[i];  // needs to reference the value of "White" in the array
		} else if(document.getElementById("breadCheckboxWheat").checked){
			var breadPrices = bread.Wheat[i];
		} else if(document.getElementById("breadCheckboxAsiago").checked){
			var breadPrices = bread.Asiago[i];
		} else if(document.getElementById("breadCheckboxNone").checked){
			var breadPrices = bread.None[i];
		}
	}

	return oldSandwichMaker;
})(SandwichMaker || {});