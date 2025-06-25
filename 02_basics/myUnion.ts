// use unions instead of any
let score : number | string = 33; // score can be a number or a string
score = "33"; // this is valid


type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string; // username is not part of User type
    id: number;
}

// user initially created as a normal user but can be an admin in the future.
let user : User | Admin = {
    name: "John",
    id: 1
}

user = {
    username: "admin",
    id: 2
}

// function getDbId(id: number | string) {
//     // Make API Call
//     console.log(`DB Id is: ${id}`);

//     // id.toLowerCase(); // this will throw an error as typescript treats this as both number and a string.
// }
function getDbId(id: number | string) {
    // Make API Call
    console.log(`DB Id is: ${id}`);
    if (typeof id === "string") {
        id.toLowerCase(); // this is valid as we are checking if id is a string
    } else {
        // get the id as a number
    }
}

const data: number[] = [1, 2, 3, 4, 5];
const data2: string[] = ["1", "2", "3", "4", "5"];
// note do not user const data3: string[] | number[] = [1, "2", 3, "4", 5]; // this is saying either a string array or a number array, but not both

const data3: (string | number)[] = [1, "2", 3, "4", 5]; // this is an array of strings and numbers
getDbId(3);
getDbId("3");

let pi: 3.14 | 3.14159 = 3.14; // setting literal value as a type

let seatAllotment: "aisle" | "middle" | "window"; // setting literal value as a type

seatAllotment = "aisle"; // this is valid
// seatAllotment = "crew"; // this is invalid
export {};