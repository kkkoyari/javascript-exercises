const fibonacci = function(count) {
	let currentValue = 1;
	let previousValue = 0;

	let index;
	if (count !== 'number') {
		index = parseInt(count);
	} else {
		index = count;
	}

	if (index < 0) {
		return "OOPS";
	}

	for (let i = 0; i < index; i++) {
		
		let sum = previousValue + currentValue;

		previousValue = currentValue;
		currentValue = sum;
	}

	return previousValue;
};

// Do not edit below this line
module.exports = fibonacci;
