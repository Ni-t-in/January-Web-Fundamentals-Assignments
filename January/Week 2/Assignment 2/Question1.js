var q="Question 1 \nTake three number from the user as input and alert minimum of those three."

console.log(q)

var a =  prompt("Enter 1st number")
a=parseInt(a)
var b = prompt("Enter 2nd number")
b=parseInt(b)
var c = prompt("Enter 3rd number")
c=parseInt(c)


if (a<b && a<c){alert("The minimum number is " +a )}
else if(b<a && b<c){alert("The minimum number is " +b )}
else if(c<a && c<b){alert("The minimum number is " +c )}
else{alert("All numbers are equal")}