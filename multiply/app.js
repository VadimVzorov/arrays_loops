var numbers = [1, 2, 3, 4, 5, 6, 8, 8, 8, 9, 7, 5];

function multiply (array) {
	return array.reduce (function mult (prod, cur){
		return prod * cur;
	})
}

console.log (multiply(numbers));