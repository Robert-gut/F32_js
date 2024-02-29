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
const user = {
    login: 'test@gmail.com',
};
const user1 = {
    login: 'test@gmail.com',
    password: 'qwerty-1'
};
//! in fun
function multiply(a, b) {
    // if(!b){
    //   return a * a
    // }
    // return a * b
    return !b ? a * a : a * b;
}
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
    const test = user.password.type;
}
