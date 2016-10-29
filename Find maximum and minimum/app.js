var numbers = [1, 2, 7, 98, 67, 37, 88, 9];

function detectMax (array) {
	return array.reduce(function (prev, next){
		return prev > next ? prev : next;
		})
}

alert ("max is " + detectMax(numbers));

function detectMin (array) {
	return array.reduce(function (prev, next){
		return prev < next ? prev : next;
		})
}

alert ("min is " + detectMin(numbers));