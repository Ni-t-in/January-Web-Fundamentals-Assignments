var p="Question 1 \nUser will give a string.Return the count of vowels."

console.log(p)

var input = prompt("Enter sentence")
var array = input.split("")
var len = array.length
var a = 0
var e = 0
var i = 0
var o = 0
var u = 0

for(var j = 0;j<len ; j++){
     switch(array[j]){
     case 'a':
     case 'A':
     a++
     break
     case 'e':
     case 'E':
     e++
     break
     case 'i':
     case 'I':
     i++
     break
     case 'o':
     case 'O':
     o++
     break
     case 'u':
     case 'U':
     u++
     break
     }
}

alert("The number of times vowels  appeared in the sentence are as follows\nA = "+a+" \nE = "+e+" \nI = "+i+" \nO = "+o+" \nU = "+u )
