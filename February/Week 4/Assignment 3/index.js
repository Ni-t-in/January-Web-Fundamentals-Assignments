//Creating a program to do the sum of two numbers

function sum(){                                                     //made a function sum
    var enteredNumber1 = document.getElementById('number1');        //accessing the element by id from input
    var valueNumber1 = enteredNumber1.value;                        //storing the value entered in input
    var valueNumber1 = parseFloat(enteredNumber1.value);            //parsing the value into float as input is always in form of string.


    var enteredNumber2 = document.getElementById('number2');        //accessing the element by id from input
    var valueNumber2 = enteredNumber2.value;                        //storing the value entered in input
    var valueNumber2 = parseFloat(enteredNumber2.value);            //parsing


    var total = document.getElementById('result');                  //accessing header element to display information

    if(isNaN(valueNumber1) || isNaN(valueNumber2)){                 //if data entered by user is other than number warning will be shown.
        total.innerText = 'Please enter correct data'
    }
    else{                                                           //displaying the result if inputs are in correct datatype.
        total.innerText = (valueNumber1 + '+' + valueNumber2 + '=' + (valueNumber1 + valueNumber2));
    }
}