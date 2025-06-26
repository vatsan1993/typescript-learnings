const AISLE = 0
const MIDDLE = 1
const WINDOW = 2

let seat = 0;
if(seat == AISLE){
    console.log("You are sitting in the aisle seat");
} else if(seat == MIDDLE){
    console.log("You are sitting in the middle seat");
} else if(seat == WINDOW){
    console.log("You are sitting in the window seat");
}

// what if someone changes the value of the constants?
// This is where enums come in handy

// enum SeatType {
//     AISLE = 10,
//     MIDDLE = 22,
//     WINDOW = 33
// };
// can also have string enums
const enum SeatType {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "window"
};

let seat2 = SeatType.AISLE;
if(seat2 == SeatType.AISLE){
    console.log("You are sitting in the aisle seat");
} else if(seat2 == SeatType.MIDDLE){
    console.log("You are sitting in the middle seat");
} else if(seat2 == SeatType.WINDOW){
    console.log("You are sitting in the window seat");
}