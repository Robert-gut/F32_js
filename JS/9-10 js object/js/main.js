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

/////////////////////////////// day 2/////////////////////////////////////////

//? про методи і глибоке копіювання обєктів

// const car = {
//   name: 'MB',
//   model: 'gla',
//   maxSpeed: 340,
// }
// console.log('✌️car --->', car);

//* не працює
// const car2 = car
// car2.maxSpeed = 333
// console.log('✌️car2 --->', car2);
// console.log('✌️car --->', car);

//* Object.assing() великий мінус цього методу копіювання

//1
// const car3 = Object.assign({}, car)

// car3.maxSpeed = 400
// console.log('✌️car3 --->', car3);
// console.log('✌️car --->', car);

//2

// const car4 = {...car}

// car4.maxSpeed = 500
// console.log('✌️car4 --->', car4);
// console.log('✌️car --->', car);

//! мінуси варянта 1 і 2

// const car = {
//   name: 'MB',
//   model: 'gla',
//   maxSpeed: {
//     km: 400,
//     ml: 250
//   }
// }
// console.log('✌️car --->', car);

//1 

// const car3 = Object.assign({}, car)

// car3.maxSpeed.km = 600
// console.log('✌️car3 --->', car3);
// console.log('✌️car --->', car);

//2

// const car4 = {...car}

// car4.maxSpeed.km = 500
// console.log('✌️car4 --->', car4);
// console.log('✌️car --->', car);


//! глибоке копіювання обєктів

// const car = {
//   name: 'MB',
//   model: 'gla',
//   maxSpeed: {
//     km: 400,
//     ml: 250
//   }
// }
// console.log('✌️car --->', car);

// const newCarJson = JSON.stringify(car)
// console.log('✌️newCarJson --->', newCarJson);
// console.log('✌️newCarJson --->',typeof newCarJson);

// const newCar = JSON.parse(newCarJson)

// const newCar = JSON.parse(JSON.stringify(car))

// newCar.maxSpeed.km = 10000
// console.log('✌️newCar --->', newCar);
// console.log('✌️car --->', car);

//! з чи не працює json
// const car = {
//   name: 'MB',
//   model: 'gla',
//   maxSpeed: {
//     km: 400,
//     ml: 250
//   },
  productionYear: new Date('2018-05-12'),
// }
// console.log('✌️car --->', car);


// const newCar = JSON.parse(JSON.stringify(car))
// console.log('✌️newCar --->', newCar);
// console.log(car.productionYear.getTime());
// console.log(newCar.productionYear.getTime());


/////////////////////////////////////////////

// const newCar = {...car}
// console.log('✌️newCar --->', newCar);
// console.log(car.productionYear.getTime());
// console.log(newCar.productionYear.getTime());

//! 

// const newCar = structuredClone(car)
// console.log('✌️newCar --->', newCar);
// newCar.maxSpeed.km = 2000
// console.log('✌️car --->', car);


// console.log('✌️newCar --->', newCar.productionYear.getTime());

//? методи  Object()

//! Object.keys() : string[]

// const car = {
//   name: 'MB',
//   model: 'gla',
//   maxSpeed: 340,
// }


// const objKey = Object.keys(car)
// console.log('✌️objKey --->', objKey);

//! Object.values() : any[]

// const objValue = Object.values(car)
// console.log('✌️objValue --->', objValue);

//! Object.entries() : [any[key value]]


// const objEntries = Object.entries(car)
// console.log('✌️objEntries --->', objEntries);

//! Object.defineProperty()

// const objProp = Object.defineProperty(car, 'clearance',{
//   value: 550,
//   enumerable: false
// })

// console.log('✌️objProp --->', objProp);
// console.log('✌️objProp --->', objProp.clearance);



