var p="Question 1 \nTake input n from user and print all number in reverse order."

console.log(p)

var q = prompt("Enter how many numbers you want")
var q = parseInt(q)
var i = 0
var z = 0
var array = []

while(i<=q){
        array[z] = q--
        z++
}

alert(array)