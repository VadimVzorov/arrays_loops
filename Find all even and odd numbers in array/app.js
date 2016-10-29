var numbers = [1, 2, 3, 4, 6, 8, 95, 87, 658, 988, 732, 777, 123];

function detectEven (array) {
	return array.filter (function even (number) {
			return number % 2 === 0;
		})
}

alert ("even numbers are " + detectEven (numbers));

function detectOdd (array) {
	return array.filter (function odd (number) {
			return number % 2 != 0;
		})
}

alert ("odd numbers are " + detectOdd (numbers));