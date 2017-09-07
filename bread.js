var SandwichMaker = (function(oldSandwichMaker){
	const bread = [{"White": 2.00, "Wheat": 2.00, "Asiago": 3.00}];

	oldSandwichMaker.getBread = function(){
		return bread;
	};

	oldSandwichMaker.setBread = function(newBread){
		bread.push(newBread);
	};

	return oldSandwichMaker;
})(SandwichMaker || {});