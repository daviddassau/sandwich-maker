var SandwichMaker = (function(oldSandwichMaker){
	const veggies = [{"Lettuce": .50, "Tomatoes": .50, "Onions": .50}];

	oldSandwichMaker.getVeggies = function(){
		return veggies;
	};


	return oldSandwichMaker;
})(SandwichMaker || {});