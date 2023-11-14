// ? DOM

// console.log(window.document.documentElement);
// console.log(window.document.body);
// console.log(window.document.head);

//! навігацію по вузлам

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.body.childNodes);

// console.log(document.body.previousSibling);
// console.log(document.body.nextSibling);
// console.log(document.body.parentNode);

//! навігацію по елементам

// console.log(document.body.children);

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);


// console.log(document.body.previousElementSibling);
// console.log(document.body.nextElementSibling);
// console.log(document.body.parentNode);


// ? пешук елементвів в DOM
//! ПОШУК ПО ПЕРНОМУ СЕЛЕКТОРУ querySelecretAll()

// const test = document.querySelectorAll('li')

// console.log(test[0]);
// console.log(test[1]);
// console.log(test[2]);
// console.log(document.querySelectorAll('.li'));
// console.log(document.querySelectorAll('#li4'));
// console.log(document.querySelectorAll('[name]'));
// console.log(document.querySelectorAll('ol [name="li6"]'));

//!querySelecret() він вертає тільки перший елемент
// console.log(document.querySelector('.li'));


//!getElementById() пошук по id
// console.log(document.getElementById('li4'));

//!getElementsByTagName() пошук по tag
// console.log(document.getElementsByTagName('title'));
// console.log(document.getElementsByTagName('li'));

//!getElementsByClassName() пошук по class
// console.log(document.getElementsByClassName('li'));

//!getElementsByName() пошук по name
// console.log(document.getElementsByName('li'));

//? види колекцій є жива і статична

// console.log(document.querySelectorAll('.li'));//cтатична

// console.log(document.getElementsByClassName('li'));//жива

// document.querySelector('ol').insertAdjacentHTML(
//   'beforeend',
//   `<li class="li">…</li>`
// )


//! пошук нащадків closest()

// console.log(
//   document.querySelector('#li4').closest('h1')
// );

//! перевірку на атрибута  matches()

// console.log(
//   document.querySelector('#li4').matches('.li4')
// );


//? Редагування dom елементів

const text = document.querySelector('p')

//! inerHTML (можемо добавляти тегі)
// console.log(text.innerHTML);

// text.innerHTML = 'lorem'
// console.log(text.innerHTML);

// text.innerHTML = `<span>OK</span>`
// console.log(text.innerHTML);


//! outerHTML (можемо добавляти тегі)

// console.log(text.outerHTML);

// text.outerHTML = `<span>Lorem ipsum dolor sit amet.</span>`
// text.outerHTML = `Lorem ipsum dolor sit amet.`
// console.log(text.innerHTML);

//! textContent (можемо добавляти тегі)

// console.log(text.textContent);

// text.textContent = `<span>Lorem ipsum dolor sit amet.</span>`
// text.textContent = `Lorem`
// console.log(text.innerHTML);


//! createElement() створювати елементи
// const newEl = document.createElement('select')
// console.log(newEl);

//! вставляти елементи в dom
// const div = document.querySelector('div')

// div.before(newEl)//перед елементом
// div.after(newEl)//після елементом
// div.prepend(newEl)//перед елементом в середині
// div.append(newEl)//після елементом в середині


//! insertAdjacentHTML()

// div.insertAdjacentHTML(
//   'beforeend',
//   '<span>test</span>'
// )

//! insertAdjacentElement()

// div.insertAdjacentElement(
//   'beforeend',
//   newEl
// )


//! insertAdjacentText()

// div.insertAdjacentText(
//   'beforeend',
//   'test'
// )



