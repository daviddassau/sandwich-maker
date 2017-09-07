var SandwichMaker = (function(oldSandwichMaker){
	const condiments = [{"Mayo": .50, "Mustard": .50, "Italian Dressing": .50}];

	oldSandwichMaker.getCondiments = function(){
		return condiments;
	};


	return oldSandwichMaker;
})(SandwichMaker || {});