function popupEmerge(){                                         //function to display popup
var list = document.getElementById('displaypopup').classList;   //accessing class by Id
list.remove('display-none');                                    //will remove class display-none
list.add('popup');                                              //adding class of popup
}
function closePopUp(){                                          //function to close popup window
    var list = document.getElementById('displaypopup').classList;   //accessing class by Id
    list.remove('popup');                                       //will remove class popup
    list.add('display-none');                                   //adding class of display-none
}