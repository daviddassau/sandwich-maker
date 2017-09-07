var SandwichMaker = (function(oldSandwichMaker){
	const cheese = [{"American": 1.00, "Swiss": 1.00, "Provolone": 1.00}];

	oldSandwichMaker.getCheese = function(){
		return cheese;
	};


	return oldSandwichMaker;
})(SandwichMaker || {});