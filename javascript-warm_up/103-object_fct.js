#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12,
    incr: function () {
        this.value++;
    }
};
const incr = 0;
for (let i = 0; i < incr; i++) {
    myObject.incr()
}
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);