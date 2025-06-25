// let User = {
//     name : "John",
//     email: "john@gmail.dev",
//     isActive: true,
// }

// this function is accepting an object with specific properties
// function createUser({name: string, isPaid: boolean}) {

// }

// createUser({name: "John", isPaid: false, email: "j@j.com"}); // this thows an error because the email property is not expected

// odd behavior of typescript

// generally we will get the details of the user from a database or an API, so we will not have control over the object structure
// but typescript will not throw an error if we pass an object with extra properties, it will just ignore the extra properties
// this is called "structural typing" in typescript, it means that typescript will check the structure of the object and not the type of the object
// so if we pass an object with the expected properties, typescript will not throw an error
// let newUser = {name: "John", isPaid: false, email: "j@j.com"}

// createUser(newUser); // this works because typescript is not checking the extra properties in the object

// there is a better way to create the functions. It is called type aliases and  interfaces we will learn it later

// this function is returning an object with specific properties
// function createCourse(): {name: string, price: number} {
//     return {name: "ReactJS", price: 399};
// }


// type aliases
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;

// }

// function createUser(user: User): User {
//     // do something with the user
//     return {
//         name: "John",
//         email: "",
//         isActive: true
//     }
// }
// let user ={
//     name: "John",
//     email: "",
//     isActive: true
// }
// createUser(user)


// readonly

type User = {
    readonly _id: string; // this property cannot be changed
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number; // this property is optional
}

let user: User  = {
    _id: "123",
    name: "John",
    email: "",
    isActive: false
}

user.email = "john@gmail.com";

// user._id = "456"; // this will throw an error because _id is readonly

type CardNumber = {
    readonly cardNumber: string;
    // could have more properties
}

type CardDate = {
    readonly cardDate: string;
    // could have more properties
}

// combining multiple types to create a new type
type creditCardDetails = CardNumber & CardDate & {cvv: number} ; // this is called intersection type, it means that the object will have all the properties of both types. The cvv that we are combining is not a good way of doing it.

export {};