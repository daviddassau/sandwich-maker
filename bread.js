// let breadRadioWhite = document.getElementById("breadRadioWhite");
// let breadRadioWheat = document.getElementById("breadRadioWheat");
// let breadRadioAsiago = document.getElementById("breadRadioAsiago");



var SandwichMaker = (function(oldSandwichMaker){
	const bread = {"White": 2.00, "Wheat": 2.00, "Asiago": 3.00, "None": .00};

	// Private variable to store the different bread prices
  	var breadPrices;

	oldSandwichMaker.getBread = function(){
		return bread;
	};

	for(var i = 0; i < bread.length; i++){
		if(document.getElementById("breadRadioWhite").checked){
			var breadPrices = bread.White[i];  // needs to reference the value of "White" in the array
		} else if(document.getElementById("breadRadioWheat").checked){
			var breadPrices = bread.Wheat[i];
		} else if(document.getElementById("breadRadioAsiago").checked){
			var breadPrices = bread.Asiago[i];
		} else if(document.getElementById("breadRadioNone").checked){
			var breadPrices = bread.None[i];
		}
	}

	return oldSandwichMaker;
})(SandwichMaker || {});