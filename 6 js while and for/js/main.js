//?ЦИКЛИ В JS

// console.log('hello')
// console.log('hello')
// console.log('hello')
// console.log('hello')
// console.log('hello')

//! For

//* for(початкове значення; умова(поки умова === true); крок ){
//*   тіло цикла
//* }

// for(let i = 0; i <= 5; i++){
//   console.log('hello ' + i)
// }


///////////////////////////////////////////////////////////////////////////////////

// const arr = ['Bmw', 'MB', 'Renault', 'Audi', 'Citroen', 'Seat', 'Ferari']

// for(let i = 0; i < arr.length; i++){
//   console.log(`auto: ${arr[i]}`)
// }

///////////////////////////////////////////////////////////////////////////////////
//! вічний цикл

// for (let i = 0; i < 5; i) {
//   console.log('test'+ i);
// }

///////////////////////////////////////////////////////////////////////////////////
//! WHILE
//* while(умова === true){
//*   тіло циклу
//* }

// let a = 1
// while(a <= 5){
//   console.log(a);
//   a++
// }

//! вічний цикл
// while(true){}

///////////////////////////////////////////////////////////////////////////////////
//! break - зупиняє цикл

// let b = 0
// while(true){
//   b++
//   console.log(b)
//   if (true) {
//     break
//   }
// }


/////////////////////////////////////////////////////////////////////////////////////

// const factorial = (n) => {
//   if (n < 0) {
//     return 'Факторіал лише для не-відємних чисел'
//   }
//   let result = 1
//   while(n > 0){
//     result *= n
//     n--
//   }
//   return result
// }


// const number = 7
// const result = factorial(number)
// console.log(`факторіал числа ${number} дорівнює: ${result}`);

//! do while (спочатку виконується потім перевіряється)

// let y = 5 
// do{
//   console.log(y)
//   y++
// }while(y < 5)

// let x = 5
// while(x < 5){
//   console.log(x)
//   x++
// }

//! for of зручно працювати з масивами

// const arr= ['Bmw', 'MB', 'Renault', 'Audi', 'Citroen', 'Seat', 'Ferari']

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for(let auto of arr){
//   console.log('auto: ' + auto);
// }

//! for in зручний для обєктів

// const person = {
//   name: 'Jon',
//   age: 30,
//   isMerried: true,
//   auto: 'VW'
// }



// for(let key in person){
//   console.log(`${key}: ${person[key]}`);
// }

/////////////////////////////////////////////////////////////////////////////////////


// const multiplicationTable = () => {
//   const number = +prompt('Enter number')
//   if (!isNaN(number)) {
//     for (let i = 1; i <= 10; i++) {
//       console.log(`${number} * ${i} = ${i*number}`);
//     }
//   }
//   else{
//     alert('Enter number, not symbols')
//     multiplicationTable()
//   }
// }

// multiplicationTable()


// const randomNum = Math.floor(Math.random() * 100)

let combinations = 0; 
const password = Math.floor(Math.random() * 1000)
for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    for (let k = 0; k <= 9; k++) {
        // console.log(`${i}${j}${k}`);
        if (password === combinations) {
          console.log(password + ' = ' + combinations)
          break
        }
        combinations++;
    }
  }
}

