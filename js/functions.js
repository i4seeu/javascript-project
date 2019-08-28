// functions
function login()
{
  console.log("Login");
}

function register(){
  console.log("Registering");
}
// pass parameters to a function
function sum(first_number, second_number){
    var total = first_number + second_number;
    console.log(total);
}
//var name = "Noordeen's phone";
// function invocation or calling
login();
register();
sum(4,7);

function multiply(){
  var first_number = document.getElementById("first_number").value;
  var second_number = document.getElementById("second_number").value;
  var product = first_number * second_number;
  document.getElementById("product").innerHTML = product;
}
var fisrt_name = "Vanessa";
var surname = "Narciso";

var fullname = fisrt_name + " " + surname;
console.log(fullname);

// assignment
/*
 design a form that accepts first name and surname and prints the full name
*/

function details(){
   var firstname = document.getElementById("firstname").value;
   var surname = document.getElementById("surname").value;
   var full_name = firstname + " " + surname;

   document.getElementById("full_name").innerHTML = full_name;
}

function average(num1, num2, num3)
{
  var ave = (num1 + num2 + num3)/3;
  return ave;
}

var average_numbers = average(3,4,4);
console.log(average_numbers);
console.log(average(2,3,5));
