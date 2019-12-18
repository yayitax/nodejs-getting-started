// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
let count = 0;
const intervalId = setInterval(
    () => {
        console.log((count + 1) + " Hello World!!");
        count++;

        if (count === 5) {
            console.log("We are done!!");
            clearInterval(intervalId);
        }
    }, 1000
);