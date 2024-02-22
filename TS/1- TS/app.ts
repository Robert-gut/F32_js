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

let message: string = 'Hello'
let count: number = 999
let like: boolean = true

let nullableValue: null = null
let undefinedValue: undefined = undefined

let anyValue: any = 'hello'
anyValue = 34
anyValue = true

//! визначення функції з типами параментрі та поверненням значення
// function add(a: number, b: number): number{
//   return a + b
// }

// const add = (a: number, b: number): number => a + b

//! виклик функції  та присвоїння типа
// let result: number = add(2,3)

//! визначення масиву з типом даних
const numbers: number[] = [1,2,3,4,5,6]
const string: string[] = ['1','2','3','4','5','6']

let tupleValue: [number, string, boolean] = [1, 'true', true]

//! визначення обєкти з типом даних
const person: {name: string, age: number} = {
  name: 'Ben',
  age: 34,
}

//! Визначення класу з власт та типами

class Animal {
  name: string;

  constructor(name: string){
    this.name = name
  }

  sayHello(): void {
    console.log(`hello i'm ${this.name} !`);
  }
}

//! екземпляр класу

const cat = new Animal('Мурчік')
console.log(cat.name);
cat.sayHello()

//! interface

interface Person {
  name: string,
  age: number,
  email?: string
}
const user: Person = {
  name: 'Alex',
  age: 50,
}

//!використання умовних операторів та циклами
const x: number = 5
if (x > 0) {
  console.log('x > 0');
}else if (x < 0){
  console.log('x < 0');
}else{
  console.log('x === 0'); 
}

for(let i = 0; i <= 5; i++){
  console.log(i);
}

//! використання модифікаторів достопу в класи

class Car{
  private brand: string
  protected speed: number

  constructor(brand: string) {
    this.brand = brand
    this.speed = 0
  }

  accelerate(amount: number): void {
    this.speed += amount
  }

}

class SportsCar extends Car {
  constructor(brand: string) {
    super(brand)
  }

  accelerate(amount: number): void {
    if(amount > 50){
      console.log('Занадто велике прискорення');
    } else {
      super.accelerate(amount)
    }
  }
}

let ferrari = new SportsCar('Ferrari')

ferrari.accelerate(40)
