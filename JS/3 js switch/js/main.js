//? оператори

//! матиматичні оператори 

// console.log('Додавання 1 + 1', 1 + 1);
// console.log('Віднімання 2 - 1', 2 - 1);
// console.log('Множення 2 * 2', 2 * 2);
// console.log('Ділення 4 / 2', 4 / 2);
// console.log('Остача від ділення 5 % 2', 5 % 2);
// console.log('Степінь 3 ** 2', 3 ** 2);

//! матиматичні оператори з різними типами даних

// console.log('yes' + ' or' + ' not');
// console.log('Namber ' + 2);
// console.log('98' + 2);
// console.log('98' + 2 + true);

// console.log(true - 1);
// console.log('test' - 1);

// console.log(2 * '10');

//! унарний оператор +

// console.log(+'245');
// console.log(+'200');
// console.log(+'test');
// console.log(+true);
// console.log(+false);
// console.log(+undefined);
// console.log(+null);
// console.log(+45);

//! Оператор присвоєння =

// const pi = 3 + 0.14
// console.log(pi);

//! скорочення

// let a = 1
// a = a + 2
// console.log(a);

// let b = 10 
// console.log(b += 1);
// console.log(b -= 1);
// console.log(b *= 4);
// console.log(b /= 2);

//! інкреимент і декремент

//*інкреимент ++1
// let c = 10
// c = c + 1
// c += 1
// console.log(c);

// let d = 100
// d++
// console.log(d);


//*декремент --1

// let i = 111
// i--
// console.log(i);

//! постфікс і префіксна розміщення

//* постфікс
// let f = 999
// console.log(f++);
// console.log(f);

//* префіксна

// let f = 999
// console.log(++f);



//! Оператори порівняння

//* >
//* <
//* <=
//* >=

//* == рівнісьть
//* === сувору  рівнісьть

//* != НЕ  рівнісьть
//* !== НЕ суворА  рівнісьть

// console.log(1 > 2);
// console.log(1 < 2);

// console.log(1 === 2);
// console.log(2 === 2);

// console.log(1 !== 2);
// console.log('2' !== 2);


//! порівняння різних типів даних

// console.log('2' > 1);
// console.log('1' == 1);

// console.log(true === 1);
// console.log(false == 0);

// console.log(undefined == null);
// console.log(undefined === null);

// console.log(undefined == 0);
// console.log(null == 1);

// console.log('a' === 'a');
// console.log('A' < 'a');
// console.log('b' > 'a');
// console.log('abc' < 'abcd');

//! логічні оператори  ||  &&

//* || - або
// console.log(true || true);
// console.log(false || true);
// console.log(false || false);
// console.log(false || false || false || false || true || false);

//* && - і

// console.log(true && true && true && true);
// console.log(true && true && false && true);
// console.log(true && true && 1 !== 1 && true);


//! тернальний оператор 
// let a = 1
// 1 === a ? console.log(1 === a) : console.log(1 !== a);

//! if else
// if (a === 1) {
//   console.log(1);
// } else {
//   console.log(999);
// }

//! switch

// const j = 'середа'

// switch (j) {
//   case 'середа':
//     console.log(1);
//     break;
//   case 2:
//     console.log(2);
//     break
//   case 3:
//     console.log(3);
//     break
//   default:
//     console.log(999);
//     break;
// }

// function month() {
//   const monthNamber = +document.querySelector('.monthNamber').value
//   console.log(monthNamber);

//   if(monthNamber === 12 || monthNamber === 1 || monthNamber === 2){
//       console.log('Winter!');
//   }
//   else if (monthNamber === 3 || monthNamber === 4 || monthNamber === 5){
//       console.log('Spring!');
//   }
//   else if (monthNamber === 6 || monthNamber === 7 || monthNamber === 8){
//       console.log('Summer!');
//   }
//   else if (monthNamber === 9 || monthNamber === 10 || monthNamber === 11){
//       console.log('fall!');
//   }
//   else{
//       console.log('Invalid input');
//   }
// }

// function month() {
//   const monthNamber = +document.querySelector('.monthNamber').value
//   switch (monthNamber) {
//     case 1:
//     case 2:
//     case 12:
//       console.log('Winter!');
//       break;
//     case 3:
//     case 4:
//     case 5:
//       console.log('Spring!');
//       break;
//     case 6:
//     case 7:
//     case 8:
//       console.log('Summer!');
//       break;
//     case 9:
//     case 10:
//     case 11:
//       console.log('fall!');
//       break;
//     default:
//       console.log('Invalid input');
//       break;
//   }
// }


// const select = document.getElementById('bgc')
// const bg = document.querySelector('body')


// select.addEventListener('change', function(){
//   const selectValue = select.value
//   switch (selectValue) {
//     case 'green':
//       bg.style.backgroundColor = 'green'
//       break;
//     case 'blue':
//       bg.style.backgroundColor = 'blue'
//       break;
//     case 'yellow':
//       bg.style.backgroundColor = 'yellow'
//       break;
//     default:
//       bg.style.backgroundColor = 'red'
//       break;
//   }
// })