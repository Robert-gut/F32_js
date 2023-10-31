//? object

//! створення обєкта
// const obj1 = new Object()
// const obj2 = {}

// const objName = {
//   key: value,
//   key: value,
//   key: value,
//   key: value,
//   ключ: значення,
//   ключ: значення,
//   ключ: значення,
//   ключ: значення,
// }


// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330
// }

//! получіти дані з обєта

// console.log(car)

// console.log(`${car.name} ${car.model}`)
// console.log(car['age'])
// console.log(car.age)

// let objKey = 'maxSpeed'

// console.log(car[objKey])

//! що ми можемо вложувати в обєкт

// const objType = {
//   str: 'string',
//   number: 999,
//   boolean: true,
//   null: null,
//   und: undefined,
//   arr: [1,2,3,{}],
//   obj: {name: 'test'},
//   fn: function(){console.log('ok')}
// }

// console.log(objType.und)
// console.log(objType.null)
// console.log(objType.arr[1])
// console.log(objType.obj.name)

// objType.fn()


//? модифікація обєкта

//!1 + додавання нових властивостей
// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330
// }
// console.log(car);

// car.kg = 2100
// console.log(car);

// car.engine = {
//   name:'m57',
//   type: 'disel',
//   power: 350
// }

// console.log(car)

//!2 - видалення властивостей

// delete car.maxSpeed
// console.log(car);

//!3  редагування властивостей

// car.age = 3
// console.log(car)
// console.log(car.age)

// console.log(car)

//? копіювання обєктів

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330
// }
// console.log('✌️car --->', car)


// const superCar = car
// console.log('✌️superCar --->', superCar)

// superCar.age = 5
// console.log('✌️car --->', car)
// console.log('✌️superCar --->', superCar)

// car.age = 4
// console.log('✌️car --->', car)
// console.log('✌️superCar --->', superCar)



//! як правельно робити копію обєкта або метод assign()

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330
// }
// console.log('✌️car --->', car)

// const superCar = Object.assign({}, car)
// console.log('✌️superCar --->', superCar);

// superCar.maxSpeed = 290
// console.log('✌️car --->', car)
// console.log('✌️superCar --->', superCar);

/////////////////////////////////////////////////////////////////

// const target = {a: 1, b: 3}
// const source = {b: 4, c: 5}
// const source2 = {d: 6, i: 9}

// const retunrnedTarget = Object.assign({}, target, source, source2)

// console.log('✌️retunrnedTarget --->', retunrnedTarget);
// console.log('✌️target --->', target);

//! перевірка на існування ключа в обєкті in

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
// }
// console.log('✌️car --->', car.age)

// if(car.age === undefined){
//   console.log('test');
// }

// if ('age' in car) {
//   console.log('ok');
// }


//! перебор нашого обєкта fon in

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
// }

// for(const key in car){
//   // console.log(key);
//   // console.log(car[key]);
//   console.log(`${key}: ${car[key]}`);
// }

//! методи обєктів або функції в обєкті

// const car = {
//   name: 'BMW',
//   model: 'm5',
//   age: 2,
//   maxSpeed: 330,
//   // showInfo: function(){
//   //   console.log(`name:${this.name}, model:${this.model}, age:${this.age}`);
//   // }
//   showInfo: () => {
//     console.log(`name:${this.name}, model:${this.model}, age:${this.age}`);
//   }
// }

// car.showInfo()