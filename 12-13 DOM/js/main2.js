// ? DOM day2

//! перенос ел

// const li4 = document.querySelector('#li4')
// const li6 = document.querySelector('[name="li6"]')
// console.log(li4);
// console.log(li6);

// li6.after(li4)

//! копіювання ел

// const ol = document.querySelector('ol')


// const copy_ol = ol.cloneNode()
// const copy_ol = ol.cloneNode(true)

// console.log(copy_ol);

// ol.after(copy_ol)

//! видалення ел

// const li6 = document.querySelector('[name="li6"]')

// li6.remove()

//? керування class and style

//! керування class
//*className
// const ol = document.querySelector('ol')

// console.log(ol.className);//всі імена класів

// ol.className = 'test2'//перезапис класа

// console.log(ol.className);//всі імена класів

//////////////////////////////////////////////////

//* classList

// ol.classList.add('red', 'size')//*добавляння класів

// ol.classList.remove('red')//*del class

// ol.classList.toggle('red')
//* видалення якщо є і добавляння якщо немає

// console.log(ol.classList.contains('red'));
// console.log(ol.classList.contains('blue'));
//* true and false найдено або ні

// console.log(ol.classList);

//! style

const h1 = document.querySelector('h1')

h1.style.textAlign = 'center'
h1.style.fontSize = '45px'
h1.style.color = 'green'
h1.style.fontFamily = `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`

// console.log(h1.style.textAlign);

//! cssText

const h2 = document.querySelector('h2')

h2.style.cssText = `
    color: blue;
    text-align: center;
`

//! getComputedStyle()
// console.log(h1.style.margin);
// console.log(getComputedStyle(h1).marginTop);
// console.log(getComputedStyle(h1, '::after').margin);

//! получіти число

// console.log(h1.style.fontSize);
// console.log(parseInt(h1.style.fontSize));

// h1.style.fontSize = `${num}px`

//! атибути 

const input = document.querySelector('input')
const a = document.querySelector('a')

console.log(input.type);
console.log(input.value);
console.log(a.href);

a.href = 'https://google.com'

//! Attribute() has get rem set

console.log(input.hasAttribute('value'));//перевірка

console.log(input.getAttribute('value'));//значення
console.log(input.getAttribute('type'));//значення
console.log(a.getAttribute('href'));//значення

console.log(input.setAttribute('value', 'test'));//значення

console.log(input.removeAttribute('value'));//del






