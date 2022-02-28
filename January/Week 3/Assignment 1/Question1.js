var p="Question 1 \nUse the object created in the class. Take a number from the user input and return a list. (Do this in console.log) of all the students who have scrored equal to or more than those marks."

console.log(p)

var obj = {
    "first_name" : "Nitin",
    "last_name" : "Mankar",
    "email" : "nitinmankar213@gmail.com",
     "roll_no." : "21",
     "students" : [ 
	{
	  "name" : "Luffy",
	  "marks" : 15
	},
	{
	  "name" : "Zoro",
	  "marks" : 17
	},
	{
	  "name" : "Sanji",
	  "marks" : 23
	},
	{
	  "name" : "Jinbei",
	  "marks" : 35
	},
	{
	  "name" : "Usopp",
	  "marks" : 21
	},
	{
	  "name" : "Chopper",
	  "marks" : 33
	},
	{
	  "name" : "Brook",
	  "marks" : 38
	},
	{
	  "name" : "Franky",
	  "marks" : 40
	},
	{
	  "name" : "Nami",
	  "marks" : 37
	},
	{
	  "name" : "Robin",
	  "marks" : 41
	}
        ]
}

var ip = prompt("Enter marks to check the list of student who scored equal to or above the given score.")
var ip = parseInt(ip)
var len = obj.students.length

for(var i = 0 ; i<len ; i++){
     var a = obj.students[i]
     var name = a.name
     var marks = a.marks
     if(ip<=marks){
         console.log("Name  : ",name,"\n")
         console.log("Marks : ",marks,"\n")
     }
}