//? ТИПИ ФУНКЦІЙ

//! 1 Функції оголошення (Function Declaration) 


// console.log(add(10,20));

// function add(a, b){//! a b параметри функції
//   return a + b
// }

// console.log(add(1,2));

// add(5,7)//! 5 7 аргументи функції


// function logArguments(){
//   console.log(arguments.length);
//   console.log(arguments);
//   console.log(arguments[4]);
// }


// logArguments(1,2,3,10,'top',true)

// function logReturn(a) {
//   console.log('start');
//   if(a === 10){
//     return 
//   }

//   console.log('finish');
// }

// logReturn(10)

//! 2 Функції вирази (Function Expression)

// sayHello()

// const sayHello = function() {
//   console.log('Hello');
// }

// sayHello()


//! 3 Стрілкові функції (Arrow Function)
// sayBye()

// const sayBye = () => {
//   console.log('Bye');
// }

// sayBye()

// const arr = [1,2,3,4,5,6,7,true,'top']

// const test = (a) => {
//   console.log(arguments);
// }
// const test = () => {
//   console.log(arguments);
// }


// test(1,2,3,4,5,true,'yellow')

// const test2 = (a, b) =>  a + b

// const test2 = (a, b) =>  {
//   return a + b
// }

// console.log(test2());

//! 4. Самовикликаючіся функції (Immediately Invokid Function Expressions)

// (function (name) {
//   console.log(`HELLO ${name} !!!`);
// })('Rebert')

// (function (name) {
//   console.log(`HELLO ${name} !!!`);
// }('Rebert'))

// function (name) {
//   console.log(`HELLO ${name} !!!`);
// }('Rebert')

// const iife = function(name) {
//   console.log(`HELLO ${name} !!!`);
// }('Robert')

//! 4. Рекурсивні функції (Recursive Functions)

// function logNun(num) {
//   console.log(num)
//   if(num === 100){
//     return
//   }
//   logNun(++num)
// }

// logNun(1)

///////////////////////////////////////////////////////////////

// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 10! = 10 * 9* ... * 6 * 5 * 4 * 3 * 2 * 1 = 120

// function factorial(n){
//   if(n === 0){
//     console.log(n);
//     return 1
//   }else{
//     console.log(n);
//     return n * factorial(n - 1)
//   }
// }

// const number = 5
// const result = factorial(number)

// console.log(`${number}! = ${result}`);

///////////////////////////////////////////////////////////////////////

// let counter = 1

// function Recursion(number) {
//   console.log(counter)
//   if(counter < number){
//     console.log('inside')
//     counter++
//     Recursion(number)
//   }
// }

// Recursion(5)


//////////////////////////////////////////////////////////////////////

// function generateNestedList(depth, items){
//   if(depth === 0){
//     return
//   }

//   const openTag = '<ul>' 
//   const closeTag = '</ul>' 
//   let listItems = ''

//   for (let i = 0; i < items; i++) {
//     listItems += `<li>${generateNestedList(depth - 1 , items)}</li>`
//   }

//   return `${openTag}${listItems}${closeTag}`
// }

// console.log(generateNestedList(4, 2));