//?if else

// const a = +prompt('Enter 1 namber')
// const b = +prompt('Enter 2 namber')

//! >
//! <
//! >=
//! <=

// if(a > b){
//     alert(`${a} > ${b}`)
// }
// else if(a < b){
//     alert(`${a} < ${b}`)
// }
// else{
//     alert(`${a} = ${b}`)
// }


//! == порівнють по значеню а не по типу
//! === порівнює по значенн і по типу

// const x = 5
// const v = '5'

// if('5' == '5'){
// if(1 == 1){
// if(0 == 0){

// if(x === v){
//     console.log('True');
// }else{
//     console.log('False');
// }


//! && - and - і
//! || - or - або


// const m = +prompt('Enter "m" namber')
// const n = +prompt('Enter "n" namber')
// const k = +prompt('Enter "k" namber')

// if (m > n && m > k) {
//     console.log('m > n and m > k');
// }else if (n > m && n > k){
//     console.log('n > m and n > k');
// }else if (k > m && k > n){
//     console.log('k > m and k > n');
// }else{
//     console.log('m = n = k');
// }

// ================================================================

// const password = prompt('Enter password')
// const confirmPassword = prompt('Enter confirm password')

// if (password.length <= 4 || confirmPassword.length <= 4) {
//     console.log('Less then 4');
// }else if (password.length >= 16 || confirmPassword.length >= 16){
//     console.log('More then 16');
// }else if(password === confirmPassword){
//     console.log('Welcome!');
// }else{
//     console.log('Diferent passwords');
// }

function month() {
    const monthNamber = +document.querySelector('.monthNamber').value
    console.log(monthNamber);

    if(monthNamber === 12 || monthNamber === 1 || monthNamber === 2){
        console.log('Winter!');
    }
    else if (monthNamber === 3 || monthNamber === 4 || monthNamber === 5){
        console.log('Spring!');
    }
    else if (monthNamber === 6 || monthNamber === 7 || monthNamber === 8){
        console.log('Summer!');
    }
    else if (monthNamber === 9 || monthNamber === 10 || monthNamber === 11){
        console.log('fall!');
    }
    else{
        console.log('Invalid input');
    }
}

//! тернальний оператор (умова ? ifTrue : ifFalse)

const age = +prompt('how old are you?')

age >= 18 ? console.log('можна голосувати') : console.log('НЕможна голосувати');

