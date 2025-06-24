// function addTwo(num ){// takes any type of value
//     num.toUpperCase(); // allowed
//     return num + 2;
// }


// function addTwo(num: number ){// takes only a number
//     //num.toUpperCase(); // throws an error
//     return num + 2;
// }

// function addTwo(num: number ){// takes only a number
//     //num.toUpperCase(); // throws an error
//     return "hello"; // this works without error, but the return type is not number. This makes it as a wrong logic and might break the app
// }

function addTwo(num: number ): number{// takes only a number and returns a number
    // return "hello"; // throws an error
    return num + 2; // this is correct logic
}




// function getUpper(val){ // infers anu type of value
//     return val.toUpperCase();
// }

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid:boolean = false){
    // default value for isPaid is false
    console.log(name, email, isPaid);

}

let loginUser = (name: string, email: string, isPaid:boolean = false) => {
    // note: when typescript converts the code, the let above will be converted to a var
    // default value for isPaid is false
    console.log(name, email, isPaid);
}

addTwo(5);
getUpper("hello");
signUpUser("John", "asdjkfh", false);
loginUser("John", "asdjkfh");


// function getValue(myVal: number): boolean { // return type can be number or boolean
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK"; // error here
// }


const getHello = (s: string): string =>{
    return "Hello " + s;
}


const heros = ["Thor", "Spiderman", "Ironman"];

// const heros= [1,2,3]
// typescript can infer the type of hero so no need to specify the type but the return type must be specified
heros.map((hero): string => {
    return `Hero is ${hero}`;
});

// void is used when a function does not return anything. it is better to explicitly specify the return type as void
function consoleError(errmsg: string): void {
    console.log(errmsg);
    return ; // this is optional, if you don't return anything, typescript will infer the return type as void
}

// some times the handleError function just throws or handles the error and we should not write a return at all . we can use never in this situation. never is recommended to functions that handles the errors
function handleError(errmsg: string): never {
    throw new Error(errmsg); // this will throw an error and stop the execution of the code
    // return ; // will raise an error
}
export {};