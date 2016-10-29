var numbers = [1, 2, 4, 5, 1, 6, 2, 2, 2, 1, 4, 7, 8, 8]

//creates an array of unique numbers in the array
function findUnique (array) {
		var dupList = [];
		for (i = 0; i < array.length; i++){
			var dupStatus = array.some (function checkStatus (num){
				return array[i] === num;
			})

			var dupListStatus = dupList.some (function checkStatus (num){
				return array[i] === num;
			})

		if (dupStatus === true && dupListStatus === false){
			dupList.push (array[i]);
		}
	}
		return dupList;
}

var uniqueNumbers = findUnique (numbers);

//counts numbers from uniqueNumbers in array


function countNum (array) {
	var uniqueArr = [];
	for (i=0; i<=uniqueNumbers.length - 1; i++){
		var count = array.filter (function (n) {
			return n === uniqueNumbers [i];
		})
		uniqueArr.push (count.length);
	}
	return uniqueArr;
}

var uniqueCount = countNum (numbers);

var results = [];
for (i=0; i<=uniqueNumbers.length - 1; i++){
	results.push ("num: " + uniqueNumbers[i] + "--->" + uniqueCount[i] + "   ");
}


alert (results);



