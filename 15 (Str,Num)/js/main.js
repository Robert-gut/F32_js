//? str

// const str1 = 'test "test"'
// const str2 = "test test 'test'"
// const str3 = `test "test" 'test'`

//! ``

// const str4  = `
// test
// test
// test
//   `
// console.log('✌️str4 --->', str4);

// function strFun(a,b) {
//   return a + b
// }

// const str5  = `test test ${str4} ${strFun(5,5)}`
// console.log('✌️str5 --->', str5);

//! спец символи 

// const str6 = '\n\ttest \'test\' \n\t\ttest \\ test \\ test'
// console.log('✌️str6 --->', str6);

//! Юнікод-символи

// const str7 = 'test test test \u1008 \u058E \u0000'
// console.log('✌️str7 --->', str7);

//! довжину str.letch

// const str8 = 'test'
// console.log('✌️str8 --->', str8.length);

//! як получіти певний символ в str
// const str9 = 'test'
// console.log('✌️str9 --->', str9[0]);
// console.log('✌️str9 --->', str9[1]);
// console.log('✌️str9 --->', str9[2]);
// console.log('✌️str9 --->', str9[3]);
// console.log('✌️str9 --->', str9[str9.length - 2]);

//! регістер в str

// const str10 = 'Test'
// console.log('✌️str10 --->', str10.toLowerCase());
// console.log('✌️str10 --->', str10.toUpperCase());

// console.log('Test' === 'test');

//! пошук в str

// const str11 = 'Test'

//* indexOf вертає індекс найденого символа або -1
// console.log(str11.indexOf('st'));//2
// console.log(str11.indexOf('ste'));//-1

//* includes вертає boolean 
// console.log(str11.includes('st'));//true
// console.log(str11.includes('ste'));//folse 

//*startsWith and endsWith
// console.log(str11.startsWith('st'));//false
// console.log(str11.endsWith('st'));//true

//*slice вирізає певний символи які нам потрібні
// const str12 = 'Test1 test2 test3'
// console.log(str11.slice(2, 4));
// console.log(str11.slice(0, 4));
// console.log(str11.slice(2));

// console.log(str12.slice(6, 12));


//? Number

const num1 = 5
const num2 = 5.23465435

//! що таке 'e' в num

// const num3 = 5000000000
// console.log('✌️num3 --->', num3);

// const num4 = 5e9
// console.log('✌️num4 --->', num4);

//? Math
//! округлення чисел

//* в меншу сторону до цілого числа
// console.log('5.96875 --->', Math.floor(5.96875));
// console.log('-5.96875 --->', Math.floor(-5.96875));

//* в більшу сторону до цілого числа
// console.log('5.96875 --->', Math.ceil(5.96875));
// console.log('-5.96875 --->', Math.ceil(-5.96875));

//*  найближчого цілого числа
// console.log('5.96875 --->', Math.round(5.96875));
// console.log('5.46875 --->', Math.round(5.46875));
// console.log('5.5 --->', Math.round(5.5));

//* скорочувати до певної к-ть символів після коми
// console.log('5.96875345 --->', +5.96875345.toFixed(2));
// console.log('-5.96875345 --->', -5.96875345.toFixed(2));

//! перевірка на нормальне значення 

// console.log(145 + +'test');

// console.log(isNaN(145 + +'test'));
// console.log(Number(145 + +'test'));

// if (145 + +'test' === NaN) {
//   console.log('ok');
// }

// if (isNaN(145 + +'test')) {
//   console.log('ok');
// }

//! перевірка на число

// console.log(isFinite('145345'));
// console.log(isFinite(145345));
// console.log(isFinite('145345test test tset'));
// console.log(isFinite('14px'));

//! parsInt and parsFloat

// console.log('960');
// console.log(+'960');
// console.log(Number('960'));

// console.log(+'960px');
// console.log(Number('960px'));

// console.log(parseInt('960px'));
// console.log(parseFloat('960px'));

// console.log(parseInt('12.89px'));
// console.log(parseFloat('12.89px'));

//! Math

//псевдо рандомне число
// console.log(Math.random());//0 to 1
// console.log(Math.random());//0 to 1
// console.log(Math.random());//0 to 1
// console.log(Math.random());//0 to 1

// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));

// console.log(Math.round(Math.random() * 100));
// console.log(Math.round(Math.random() * 100));
// console.log(Math.round(Math.random() * 100));
// console.log(Math.round(Math.random() * 100));

// max min

// const arr = [1,3,5,7,4,-13,11]

// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

//abs()

// console.log(-111);
// console.log(Math.abs(-111));

//степінь pow()

// console.log(Math.pow(2, 2));
// console.log(Math.pow(2, 3));
// console.log(Math.pow(3, 3));