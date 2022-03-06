function swap() {                                                       //function to swap two numbers
    var a = parseInt(document.getElementById('firstnumber').value);     //created variable to store values
    var b = parseInt(document.getElementById('secondnumber').value);

    if (isNaN(a) || isNaN(b)) {                                         //if user enters wrong values then error will be shown
        var warn = document.getElementById('warning');                  //accessing the element by id
        warn.innerText = 'Please enter valid data';                     //changing the innertext to show warning
    }
    else {                                                              
        var warn = document.getElementById('warning');                  //this will remove the warning once user enter correct values
        warn.innerText = '';

        a = a + b;                                                      //adding the values of both the variables
        b = a - b;                                                      //from the sum of two values subtracting the value of second variable as a result we will obtain the value of a in this variable
        a = a - b;                                                      //same process, described in previous line

        var show_a = document.getElementById('var_a');                  //to show the swapped values
        var show_b = document.getElementById('var_b');

        show_a.innerText = 'The value of a is ' + a;
        show_b.innerText = 'The value of b is ' + b;
    }
}