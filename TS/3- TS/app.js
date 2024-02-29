"use strict";
//! 1 UNION '|'
// const arr = ['32', 1, true]
// function logId(id: string | number):void{
//   console.log(id);
// }
// logId(1)//valid
// logId('234')//valid
// logId(true)//not valid
//? звуження типів 
//1 string | number | boolean
function logId(id) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    }
    else if (typeof id === 'number') {
        console.log(id.toFixed(0));
    }
    else {
        console.log(id);
    }
}
//2 string and array
function logError(err) {
    if (Array.isArray(err)) {
        err.forEach(err => console.log(err));
    }
    else {
        console.log(err);
    }
}
//3 obj | obg
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
//4 a: string | number b: string | boolean
function logIds(a, b) {
    if (a === b) { // a: string and b: string
        console.log(a, b);
    }
    else {
        console.log(a, b); // a i b string num and boolean
    }
}
//!2 LITERAL TYPES 
//? 1 ЛІТЕРАЛЬНІ ТИПИ ЧИСЕЛ
let num = 1;
console.log(typeof num);
//! intersection  &
const user = {
    name: 'Alex',
    age: 28,
    slills: ['1', '2'],
    nameRole: 'ADMIN',
    id: 123
};
//! 4 interface
