// console.log('Start 1');
// console.log('Start 2');
// console.log('Start 3');
// console.log('end');

// Promise
// setInterval()
// setTimeout()

// ////////////////////////////////

// console.log('CL start 1');

// const eventBtn = document.querySelector('button')

// eventBtn.addEventListener('click', () => console.log('I Event loop'))

// setTimeout(() => console.log('CL start 2 setTim'), 0)

// Promise.resolve('CL Start3 Promise').then((data) => console.log(data))

// setTimeout(() => {
//   setTimeout(() => {
//   console.log('CL Start4 setTim into');
//   }, 1000)
// }, 1000)

// console.log('end');

let i = 0

function foo() {
  console.log(i)
  i++
  foo()
}

foo()
