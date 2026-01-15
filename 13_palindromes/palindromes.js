const palindromes = function (string) {
	
	let originalString = string.toLowerCase();
	let cleanString = originalString.replace(/[^\p{L}\p{N}]+/gu, "");
	let array = cleanString.split("");

	// filtering an array from
	


	// getting reversed String
	let reversedArray = array.reverse();
	let reversedString = reversedArray.join("");

	if (cleanString === reversedString) {
		return true;
	} else if (cleanString !== reversedString) {
		return false;
	}
};

module.exports = palindromes;
