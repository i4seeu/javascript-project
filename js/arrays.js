var nums = [1,2,3,4,5];
var arr = [1, "Noordeen", 4];

// access nth elements , use n-1th index
console.log(nums[4]);
console.log(arr[1]);

var len = arr.length;
for(var i = 0; i < len; i++){
   //console.log(arr[i]);
}
/*
1 2 3 4     00, 01, 02 , 03
4 5 7 8     10, 11, 12, 13
*/
//mutidimensional array
var numbers = [[1, 2, 3 ,4],[4 ,5 ,7 ,8]];

console.log(numbers[1][0]);
// associative arrays
var person = [];
person["name"] = "Noordeen";
person["age"] = 25;
person["country"] = "Malawi";

console.log(person);
console.log(person["age"]);
console.log(person.country);

// push pop

var arr_numebrs = [1,3,6,7];
console.log(arr_numebrs);
// adds an element to the array
arr_numebrs.push(8);
console.log(arr_numebrs);
// removes the last element in an array
arr_numebrs.pop();
console.log(arr_numebrs);

// removes the first element in an array
arr_numebrs.shift();
console.log(arr_numebrs);

delete arr_numebrs[2];
console.log(arr_numebrs);

// create an associative array of a president , name , country, when_did, and write a code that displays that inform 
