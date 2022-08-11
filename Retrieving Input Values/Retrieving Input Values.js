function getValues(){
var firsName = document.getElementById('firstName'). value;
var lastName = document.getElementById('lastName'). value;
var email = document.getElementById('email'). value;
//var age = document.getElementById('age'). value; // we must add the parseInt  if we are not ading it it will read as a string by using the praseInt we are converting the string of the age to a number
var age = praseInt (document.getElementById('age'). value);
console.log("fisrName:" + firsName); 
console.log("lastName:" + lastName); 
console.log("Email:" + email); 
console.log(age+20);
}