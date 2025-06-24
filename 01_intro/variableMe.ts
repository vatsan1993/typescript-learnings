let greetings: string = "Hello, Srivatsan!";
console.log(greetings);

let userId = 334455.3; // number by default

// userId = 'hello' // error

let isLoggedIn: boolean = false;


function getHero() {
//   return true;
return "hero"; // inferred as string
}

// let hero = getHero(); // hero is inferred as any
let hero: string = getHero(); // explicitly typed as string and give an error if the function is not returning a string


 export {};