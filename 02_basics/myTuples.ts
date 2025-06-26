const user: (string | number)[] = ["hc", 1];
const user2: (string | number)[] = [1, "hc"];
// what if we want to have a things in specific order?
let tUser: [string,number, boolean] ;


tUser = ["hc", 1, true]; // this is valid
// tUser = [ 1, "hc",true]; // this is invalid as the order of the elements is not correct

let rgb: [number, number, number] = [255, 255, 255]; // this is valid as we are setting the order of the elements


// can be done with a type aswell
type User = [string, number];

const newUser: User = ["hc", 1]; // this is valid


// newUser[1] = 'hi';
// newUser[0] = 1; // these are invalid

// problem with tuples is that we can add more elements to it as
newUser.push(10);  // this is valid as we are adding an element to the end of the tuple









export {};