var p="Question 1 \nUser enters a number, check and tell whether that number is a prime number or not."

console.log(p)

var input = prompt("Enter a number to check if it is prime number or not.")
var count = 0

if(isNaN(input)){
   alert("Enter a valid number")
}
else if(input == 2){
    alert("The number "+input+" is a prime numer")
}
else if(input == 1){
    alert("The number is neither prime nor composite number")
} 
else{
     for(var i=2;i<=input/2;i++){
            if(input % i == 0 ){
               count++ 
            }
     }
}

if(count == 0){
   alert("The number "+input+" is a prime numer")
}
else{
   alert("The number "+input+" is not a prime numer")
}