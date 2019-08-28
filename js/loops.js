//Loops
// while Loops
var number = 1; //initialize
while(number <= 5)//condition
{
  console.log(number); //this allows values in num to be displayed in the console.
  number++; //increment
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

function sum(num1,num2){ //the function sum is holding the addition method
var total = num1 + num2; //the variable total is calculating the 2 nums and giving a total
return total; //this returns the value found after the calculations were done
}

//this 2 variables act us num1 and num2
var addition = 0;
var num = 1;

/*if the condition is checked if num = 1 is <= 100, then if condition is true it then goes in the {does whats writen}*/
while(num <= 100){
  addition = sum(addition, num);
  num++; //the incremention or the adding of 1

  /*console.log(addition); if this displayed here will show all calculations*/
}
console.log(addition); //this displays only the final calculation
