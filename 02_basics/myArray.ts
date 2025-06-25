// const superHeroNames= []

// superHeroNames.push("Iron Man"); // gives an error as typescript treats the array as never type

// const superHeroNames: [] = []; // this is how we define an array but it is empty

// superHeroNames.push("Iron Man"); // gives an error as typescript treats the array as never


// correct way
const superHeroNames: string[] = []; // this is how we define an array of strings

superHeroNames.push("Iron Man");

const heroPower: Array<number> = [];
heroPower.push(2);



type User = {
    readonly _id: string; // this property cannot be changed
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number; // this property is optional
}

const allUsers: User[] = []; // this is how we define an array of User objects
const user1: User = {
    _id: "123",
    name: "John",
    email: "",
    isActive: false
}
allUsers.push(user1);


const MLModels: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]