let User = {
    name : "John",
    email: "john@gmail.dev",
    isActive: true,
}

// this function is accepting an object with specific properties
function createUser({name: string, isPaid: boolean}) {

}

// createUser({name: "John", isPaid: false, email: "j@j.com"}); // this thows an error because the email property is not expected

// odd behavior of typescript

// generally we will get the details of the user from a database or an API, so we will not have control over the object structure
// but typescript will not throw an error if we pass an object with extra properties, it will just ignore the extra properties
// this is called "structural typing" in typescript, it means that typescript will check the structure of the object and not the type of the object
// so if we pass an object with the expected properties, typescript will not throw an error
let newUser = {name: "John", isPaid: false, email: "j@j.com"}

createUser(newUser); // this works because typescript is not checking the extra properties in the object

// there is a better way to create the functions. It is called interfaces we will learn it later

// this function is returning an object with specific properties
function createCourse(): {name: string, price: number} {
    return {name: "ReactJS", price: 399};
}

export {};