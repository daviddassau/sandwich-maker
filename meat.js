var SandwichMaker = (function(oldSandwichMaker){
	const meat = [{"Ham": 2.00, "Turkey": 2.00, "Chicken": 2.00}];

	oldSandwichMaker.getMeat = function(){
		return meat;
	};


	return oldSandwichMaker;
})(SandwichMaker || {});