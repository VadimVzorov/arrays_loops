/*

1. take the first item in the array
2. search array for this item, if it is true - push to dupArray, if false take the next item
3. when pushing to dupArray: check if item is there, push only if it is there

*/


/*

var numbers = [1, 2, 1, 5, 6, 3, 88, 76, 27, 3, 27, 6, 27];

function findDuplicates (array) {
	var dupList = [];
	for (i=0; i < array.length; i++){
		if (array.indexOf(array[i], i+1) != -1){
			if ( dupList.indexOf(array[i]) === -1){
				dupList.push (array [i]);
		}
	}
	return dupList;
}

WHY IT IS NOT WORKING?

*/

/*

var numbers = [1, 2, 1, 5, 6, 3, 88, 76, 27, 3, 27, 6, 27];

function findDuplicates (array) {
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

*/

var numbers = [1, 2, 1, 5, 6, 3, 88, 76, 27, 3, 27, 6, 27];

function findDuplicates (array) {
	var dupList = []; 
	for (i=0; i < array.length; i++){
		if (array.indexOf(array[i], i+1) != -1 && dupList.indexOf(array[i]) === -1){
			dupList.push (array[i]);
		}
	}
	return dupList;
}

alert ('duplicates: ' + findDuplicates(numbers));