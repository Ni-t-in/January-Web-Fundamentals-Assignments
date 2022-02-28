var p="Question 1 \nTake n inputs from the user. It has to be dynamic(multiple n inputs by user). It should give maximum of all numbers."

console.log(p)


var array = []
for(var i = 0 ; i >= 0 ; i++){
     var q = prompt("Enter the numbers one by one.\nAfter completion type OK")
     if(q=='OK' || q=='ok'){
     break
     }
     else
     {
      var q = parseInt(q)
      array[i] = q
      }
}

var big = array[0]
var len = array.length

for(var j = 1 ; j < len ; j++){
     if(array[j] > big ){
     big = array[j]
     }
}

alert("The maximum number is " + big)