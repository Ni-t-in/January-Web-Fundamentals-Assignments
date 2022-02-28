var p="Question 1 \nPrint the first n number of a Fibonacci series."

console.log(p)

var q = prompt("Enter how many terms of Fibonacci series you want.")
var q = parseInt(q)
var a= 0
var b = 1
var z = 2
var i = 2
var temp
var array = []
array[0] = 0
array[1] = 1

while(i<q){
        temp = a+b
        a=b
        b=temp
        array[z] = temp
        z++
        q--
}

alert(array)

