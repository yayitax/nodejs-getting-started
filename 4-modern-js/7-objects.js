const mystery = "answer";

const PI = Math.PI;

const obj = {
    p1: 10,
    p2: 20,
    f1() {},
    f2: () => {},
    [mystery]: 42,
    PI,
};

// obj.mystery is undefined
// obj.answer is 42