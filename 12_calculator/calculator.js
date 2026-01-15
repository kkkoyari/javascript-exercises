const add = function(a, b) {
	let result = a + b;
	return result;
};

const subtract = function(a, b) {
	let result = a - b;
	return result;
};

const sum = function(array) {
	let sum = array.reduce((acc, value) => acc + value, 0);
	return sum;
};

const multiply = function(array) {
	let result = array.reduce((acc, value) => acc * value);
	return result;
};

const power = function(a, b) {
	let result = a ** b;
	return result;
};

const factorial = function(integer) {
	let result = 1;
	for (let i = 1; i <= integer; i++) {
		result *= i;
	}
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
