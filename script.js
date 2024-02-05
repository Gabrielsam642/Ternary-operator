// ternary operator
// condition ? expr 1 : expr 2;

function isUserValid(bool) {
    return bool
}

var answer = isUserValid(false) ? "You enter" : "Access Denied";

function conditional() {
    if (isUserValid(true)){
        return "You enter";
    } else {
        return "Access Denied";
    }
}
var answer2 = conditional()
