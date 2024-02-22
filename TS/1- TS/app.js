"use strict";
// function addMoney (sum, user){
//   user.money = user.money + summ
// }
// addMoney('1', {name: 'Ben'})
// interface User {
//   name: string,
//   money: number,
// }
// function addMoney(sum: number, user: User): User{
//   user.money = user.money + sum
//   return user
// }
// addMoney(1, {name: '34', money: 345})
//! Визначення змінної з типом
let message = 'Hello';
let count = 999;
let like = true;
let nullableValue = null;
let undefinedValue = undefined;
let anyValue = 'hello';
anyValue = 34;
anyValue = true;
//! визначення функції з типами параментрі та поверненням значення
// function add(a: number, b: number): number{
//   return a + b
// }
// const add = (a: number, b: number): number => a + b
//! виклик функції  та присвоїння типа
// let result: number = add(2,3)
//! визначення масиву з типом даних
const numbers = [1, 2, 3, 4, 5, 6];
const string = ['1', '2', '3', '4', '5', '6'];
let tupleValue = [1, 'true', true];
//! визначення обєкти з типом даних
const person = {
    name: 'Ben',
    age: 34,
};
//! Визначення класу з власт та типами
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`hello i'm ${this.name} !`);
    }
}
//! екземпляр класу
const cat = new Animal('Мурчік');
console.log(cat.name);
cat.sayHello();
const user = {
    name: 'Alex',
    age: 50,
};
//!використання умовних операторів та циклами
const x = 5;
if (x > 0) {
    console.log('x > 0');
}
else if (x < 0) {
    console.log('x < 0');
}
else {
    console.log('x === 0');
}
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
//! використання модифікаторів достопу в класи
class Car {
    constructor(brand) {
        this.brand = brand;
        this.speed = 0;
    }
    accelerate(amount) {
        this.speed += amount;
    }
}
class SportsCar extends Car {
    constructor(brand) {
        super(brand);
    }
    accelerate(amount) {
        if (amount > 50) {
            console.log('Занадто велике прискорення');
        }
        else {
            super.accelerate(amount);
        }
    }
}
let ferrari = new SportsCar('Ferrari');
ferrari.accelerate(40);
