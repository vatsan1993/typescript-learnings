"use strict";
// function addTwo(num ){// takes any type of value
//     num.toUpperCase(); // allowed
//     return num + 2;
// }
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //num.toUpperCase(); // throws an error
    return num + 2;
}
// function getUpper(val){ // infers anu type of value
//     return val.toUpperCase();
// }
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    // default value for isPaid is false
    console.log(name, email, isPaid);
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    // default value for isPaid is false
    console.log(name, email, isPaid);
};
addTwo(5);
getUpper("hello");
signUpUser("John", "asdjkfh", false);
loginUser("John", "asdjkfh");
