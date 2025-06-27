// interface tells these are nececsary properties but does not tell how to implement them

interface User {
    readonly dbId: number; // readonly property
    email: string;
    userId: number;
    googleId?: string; // optional property
    //startTrial: () => string; // method
    startTrial(): string; // method with a function signature
    getCoupon(couponName: string, value: number): number; // method with parameters
}



// type aliases vs interface
// https://chatgpt.com/c/685e10fd-18dc-8000-a569-9508f1004634


// adding more values to the interface
// maybe we want to add a new property to the interface that we brought in from a library
// lets say github token

interface User {
    githubToken: string; // optional property
}


const user: User = {
    dbId: 22,
    email: "abc@gmail.com",
    userId: 123,
    githubToken: "gh_12345",
    startTrial: () => {
        return "Trial started";
    },
    // note the parameter name can be  different from the interface parameter.
    // couponName and name are same
    getCoupon: (name: "srivatsan", off: 10 ) => {
        console.log(`Coupon name is ${name}`);
        return 10; // returns a number
    }
};

user.email = "bcd@gmail.com";
// user.dbId = 33; // error: cannot assign to 'dbId' because it is a read-only property

// inheriting interfaces
interface Admin extends User {
    role: "admin" | "ta" | 'learner'; // union type
}

const admin: Admin = {
    dbId: 1,
    email: "admin@email.com",
    userId: 1,
    githubToken: "gh_admin_12345",
    startTrial: () => {
        return "Admin trial started";
    },
    getCoupon: (name: "admin", off: 20) => {
        console.log(`Admin coupon name is ${name}`);
        return 20; // returns a number
    },
    role: "admin" // role is required
};