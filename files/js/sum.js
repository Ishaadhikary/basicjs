var num1 = parseInt(prompt("Enter the first number"));
var num2 = parseInt(prompt("Enter the second number")); 

console.log(typeof num1);
console.log(typeof num2);
function sum(num1,num2){
    sum = num1 + num2 ;
    return sum;
}

let result = sum(num1,num2);
console.log(result)
document.write("The sum of the two numbers is " + result);