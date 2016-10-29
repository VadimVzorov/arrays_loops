var numbers = [1, 2, 3, 4, 5, 6, 8, 8, 8, 9, 7, 5];

function sum (array) {
	return array.reduce (function sum (prod, cur){
		return prod + cur;
	})
}

console.log (sum(numbers));