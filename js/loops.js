//Loops
// while Loops
var number = 1;
while(number <= 5){
  console.log(number);
  number++;
}


// for Loops
for(var num = 1; num <=10; num++){
  console.log(num);
}
/*
for(initialize; condition; increment){

}
*/
/*
assignment : write a code that calculates the sum of numbers from 1 to 100

*/

function sum(num1,num2){
var total = num1 + num2;
return total;
}

var addition = 0;
var num = 1;

while(num <= 1000){
  addition = sum(addition, num);
  num++;
  /*console.log(addition); if this displayed here will show all calculations*/
}
console.log(addition); //this displays only the final calculation
