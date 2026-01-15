const findTheOldest = function(array) {

	const currentYear = new Date().getFullYear();
	
	const newArray = array.sort((a, b) => {
		return ((b.yearOfDeath ?? currentYear) - b.yearOfBirth) - ((a.yearOfDeath ?? currentYear) - a.yearOfBirth)
	});

	return newArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
