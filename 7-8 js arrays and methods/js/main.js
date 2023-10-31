//? Масиви

//! створення масивів

// let array = new Array()
// let array = []

// console.log(array);

//! синтаксис і наповнення масивів

// const arrNumbers = [1, 2, 3,]
// console.log(arrNumbers);

// const arrTypes = [
//   1,
//   'str',
//   true,
//   null,
//   undefined,
//   function(){
//     return 12345
//   },
//   {name: 'Rob'},
//   [1,2,3],
// ]

// console.log(arrTypes);


//! як получіти певне значення з масива

// console.log(arrTypes);
// console.log(arrTypes[0]);
// console.log(arrTypes[1]);
// console.log(arrTypes[2]);
// console.log(arrTypes[3]);

// console.log(arrTypes[7]);
// console.log(arrTypes[8]);


//! індексація

// const matrix = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9],
// ]

// console.log(matrix)
// console.log(matrix[1][2])
// console.log(matrix[2][1])


//! довжина масивів
  // console.log(matrix.length);

//! копіювання масивів

// const arr = [1,2,3]
// console.log(arr);

// const newArr = arr
// newArr.length = 2

// console.log(arr);
// console.log(newArr);

//! змінюємо значення в масиві

// const arr = [1,2,3]
// console.log(arr)

// arr[1] = 4
// console.log(arr)

//! нове значення

// arr[3] = 6
// arr[10] = 10
// arr[arr.length] = 111

// console.log(arr)

//? МЕТОДИ МАСИВУ

//* додавання ел до масиву

//! додавання ел в кінець масиву push()

// const cars = ['Bmw', 'Audi', 'MB']
// console.log(cars);

// cars.push('Skoda', 'Volvo')
// console.log(cars);

//! додавання ел в початок масиву unshift()

// const cars = ['Bmw', 'Audi', 'MB']
// console.log(cars);

// cars.unshift('Skoda', 'Volvo')
// console.log(cars);

//* видалення ел з масиву
//! видалення ел в кінці масиву pop()

// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Volvo',]
// console.log(cars);
// cars.pop()
// cars.pop()
// console.log(cars);

//! видалення ел з початку масиву shift()

// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Volvo',]
// console.log(cars);
// cars.shift()

// console.log(cars);

//* заміну видалення додавання ел за певним індексом

// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Volvo',]
// console.log(cars);

// cars[2] = 1
// console.log(cars);

// delete cars[2]
// console.log(cars);

//! Метод масиву splice()

// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Volvo',]
// console.log(cars);

//? видалення ел
// cars.splice(3, 2)// (start, к-ть ел)
// console.log(cars);

// const test = cars.splice(3, 2)
// console.log(test);
// console.log(cars);

//? замінну ел
// cars.splice(2, 1, 'Renault')
// console.log(cars);

//? добавляння ел
// cars.splice(3, 0, 'Renault', 'Ford', 'SAAB')
// console.log(cars);

//?ел з кінця
// cars.splice(-2, 2)
// console.log(cars);


//! Метод масиву slice() копіювання масиву

// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Volvo',]
// console.log(cars);

// const test = cars.slice(0, 4)
// console.log(test);

//з кінця
// const test = cars.slice(-3, -1)
// console.log(test);

// const test = cars.slice()
// console.log(test);


//! Метод масиву concat() копіювання масиву з додаванням нових елементів
// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Volvo',]
// console.log(cars);
// const cars2 = ['Ford']
// const cars3 = ['SAAB']

// const newCars = cars.concat(cars3, cars2)
// console.log(newCars);



/////////////////////////////////// 2 Day /////////////////////////

//! пошук в масиві

// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Volvo',]
// console.log(cars);

//? indexOf - вертає індекс знайденого елемента and -1

// console.log(cars.indexOf('MB', 3));
// console.log(cars.indexOf('MB'));
// console.log(cars.indexOf('Renault'));

//lastindexOf
// console.log(cars.lastIndexOf('Skoda'));

//? includes вертає true and false

// console.log(cars.includes('MB'));
// console.log(cars.includes('MB1'));
// console.log(cars.includes('MB', 3));

//? find and findIndex and filter

//* find - вертає знайдений обєкт and undefined
// const cars = [
//   {name:'MB', cost: 10000},
//   {name:'Bmw', cost: 15000},
//   {name:'Audi', cost: 18000},
//   {name:'Ford', cost: 28000},
// ]
// console.log(cars);


// console.log(
//   cars.find(
//     (item, index, array)=>{return item.cost === 18000}
//     )
//   );

// console.log(cars.find((item)=>{return item.cost === 17000}));//undefined
// console.log(cars.find((item)=>{return item.cost === 10000}));//{}

//* findIndex - вертає index знайденого обєкта or -1

// console.log(cars.findIndex((item)=>{return item.cost === 10000}));
// console.log(cars.findIndex((item)=>{return item.cost === 18000}));
// console.log(cars.findIndex((item)=>{return item.cost === 20000}));

//* filter - вертає ВСІ обєкти в масиві які відповідають умові

// console.log(cars.filter((item)=>{return item.cost === 18000}));

// console.log(cars.filter((item)=>{return item.cost < 16000}));
// console.log(cars.filter((item)=>{return item.cost > 16000}));


//! сортування масиву

//* sort()

// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Volvo',]
// console.log(cars);
// console.log(cars.sort());

//string 
// const test = ['d', 'b', 'a', 'c',]
// console.log(test.sort());

//number

// const num = ['1', '33', '8',]
// console.log(num.sort());
// const num = [9, 7, 5, 3, 2, 1]
// console.log(num.sort());
// console.log(num.sort((a, b)=>{
//   // if(a > b) return -1
//   // if(a < b) return 1
//   return b - a
// }));

// console.log(num.sort((a, b)=> {return b - a}));

//* revers()

// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Volvo',]
// console.log(cars);

// console.log(cars.reverse());

//! модифікування масива

//? map

// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Volvo',]
// console.log(cars);

// console.log(cars.map((item)=>{return item.toUpperCase()}));

// const newCars = cars.map((item)=>{return item.toUpperCase()})

// console.log(cars);
// console.log(newCars);

//? split - розділяє string по значенню і вертає масив

// const numStr = '1,2,3,34,56,567,687,45,54,54,54,54,56,56,65,65'
// const numStr = '1 2 3'

// const numArr = numStr.split(',')
// console.log(numArr);

//? join - приймає масив вертає string
// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Volvo',]
// console.log(cars);

// console.log(cars.join());
// console.log(cars.join('+-+-+'));
// console.log(cars.join('        '));

//! перевірка на масив Array.isArray()

// const array = [1,2,3]
// const object = {}
// console.log(typeof array);
// console.log(typeof object);

// Array.isArray(array)? console.log(true): console.log(false);
// Array.isArray(object)? console.log(true): console.log(false);


// console.log(...array);


//! Метод циклу forEach() або як перебрати масив

// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Volvo',]
// console.log(cars);

// for (const item of cars) {
//   console.log(item);
// }

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]); 
// }

// cars.forEach((item, index, array) => {
//   console.log(`${item} => ${index} => ${array}`);
// })


//! reduce()/ reduceRight()

// const num = [1,2,7]
// console.log(num);

// const reduce = num.reduce((previousValue, item, index ,array) =>{
//   return previousValue = previousValue + item
// }, 0)

// console.log(reduce);

[
  'https://dsfklasdjf.kldjf',
  'https://dsfklasdjf.kldjf',
  'https://dsfklasdjf.kldjf',
  'https://dsfklasdjf.kldjf',
  'https://dsfklasdjf.kldjf',
  'https://dsfklasdjf.kldjf',
]

