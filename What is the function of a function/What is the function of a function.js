function multiplyTwoNumbers(firstNumber, secondNumber) {
//3 * 5; 
var result = firstNumber * secondNumber;
//we can use the console.log
//console.log(result);

// but for recieving back the (result) way to do that use return keyword
return result;
}
//To see this happend going to call it
var multiplyResult = multiplyTwoNumbers(5, 8);
console.log(multiplyResult);