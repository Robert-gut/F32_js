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

// const test = cars.slice(0, 3)
// console.log(test);

//з кінця
// const test = cars.slice(-3, -1)
// console.log(test);

// const test = cars.slice()
// console.log(test);


//! Метод масиву concat() копіювання масиву з додаванням нових елементів
// const cars = ['Bmw', 'Audi', 'MB', 'Skoda', 'Volvo',]
// console.log(cars);

// const newCars = cars.concat('Ford', 'SAAB')
// console.log(newCars);
