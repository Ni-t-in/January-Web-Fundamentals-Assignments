//Creating a function to ensure user enter correct password.

function checkPassword() {                                          //creating a function.
    var firstInput = document.getElementById('inputPassword');      //first we will access the data input by the user.
    var firstValue = firstInput.value;                              //after connecting with id it is time to access the value.
    var array1 = firstValue.split('');                              //making an array of characters by splitting the string.

    var secondInput = document.getElementById('confirmPassword');   //now will check the data enetered by user in second input.
    var secondValue = secondInput.value;                            //after connecting with id it is time to access the value.
    var array2 = secondValue.split('');                             //making an array of characters by splitting the string.

    var info = document.getElementById('message');                  //made a variable to access heading tag in html file to display information.
    if(array1.length==0 || array2.length==0){
        info.innerText = 'You left input field empty'
    }
    else if (array1.length == array2.length) {                           //if length of both the array is same then we will run if else condition.
        if (firstValue == secondValue) {                            // if both strings are same then password will be created
            info.innerText = 'Password Created';                    //changing heading text.
        }
        else {
            info.innerText = 'Password Does Not Match';             //if strings do not match then this information will be shown.
        }
    }
    else {
        info.innerText = 'Enter Passwords having Same Length';      //if length of both the array are different then this information will be shown.
    }
}