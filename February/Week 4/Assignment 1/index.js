//Creating a program to print FizzBuzz series.


function call() {                                   //first made a function to take value from the user.
    var number = prompt('Enter a number to obtain FizzBuzz series');
    //input is taken from the user
    fizzBuzz(number);                               //invoking the function fizzBuzz.
}

function fizzBuzz(input) {                          //the value given by user will get assigned to input.
    var num = input;                                //assigning the value of input variable num.
    var num = parseInt(num);                        //changing the datatype from string to integer.
    var array = [];                                 //created an empty array to store data.
    if (isNaN(num)) {                               //checking wether the value given by user is valid or not.
        alert('Enter a valid number');              //to inform the user that he has entered wrong value.
    }
    else {
        for (var i = 1; i <= num; i++) {            //using for loop to generate FizzBuzz series
            if (i % 3 == 0 && i % 5 == 0) {         //if the number is divisible by both 3 and 5 FizzBuzz will be pushed to array. 
                array.push('FizzBuzz');
                continue;                           //if we have found FizzBuzz there is no need to check furthur so we will skip later part.
            }
            else if (i % 3 == 0) {                  //if the above condition fails then it will check divisibility with 3.
                array.push('Fizz')                  //if it is divisible then Fizz will be pushed.
            }
            else if (i % 5 == 0) {                  //if the above condition fails then it will check divisibility with 5. 
                array.push('Buzz');                 //if it is divisible then Buzz will be pushed.
            }
            else {
                array.push(i);                      //if all the above conditions happen to be false the value of i will be pushed
            }
        }
    }
    document.write(array);                          //FizzBuzz series will be shown on screen.
}

