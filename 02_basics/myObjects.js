"use strict";
// let User = {
//     name : "John",
//     email: "john@gmail.dev",
//     isActive: true,
// }
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    _id: "123",
    name: "John",
    email: "",
    isActive: false
};
user.email = "john@gmail.com";
user._id = "456"; // this will throw an error because _id is readonly
