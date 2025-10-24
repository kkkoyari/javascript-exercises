const removeFromArray = function(array, ...args) {
	let competelyNewArray = [];
	let originalArray = array;

	for (let i = 0; i < args.length; i++) {
		let itemValue = args[i];
		competelyNewArray = originalArray.filter(item => item !== itemValue);
		originalArray = competelyNewArray;
	}
	return competelyNewArray;
};

// Do not edit below this line
module.exports = removeFromArray;
