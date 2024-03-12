//! function

// function name(params){
//   // body fun
// }

//! як виклакати функції

// function showMyName() {
//   console.log('my name is Robert');
// }

// showMyName()
// showMyName()
// showMyName()
// showMyName()


//! параметри функції params

// function plus(a = 0, b = 0){
//   let result = a + b 
//   console.log(result);
// }



// plus(10, 5)
// plus(10, 10)
// plus(10, 15)

// plus(10, 10)

// plus(1)

// plus('45', '45')
// plus('45', '45')
// plus(true, true)

//! функції вміють щось вертати резельтат своєї роботи (return)

// function plus(a = 0, b = 0){
//   let result = a + b

  
//   return result
//   console.log('test');
// }

// const sum = plus(10, 10)

// console.log(sum);


//! зона видимості змінних

// const test1 = 'IT'
// let test2 = 'step'

// function scope(){
//   console.log(test1 + test2);

//   const test111 = 'bmw'
//   let test222 = 'm5'

//   return test111
// }

// console.log(scope() + ' ' );


// scope()



////////////////////////////////////////////////////////////



const equal = document.querySelector('.equal')

const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiplication = document.querySelector('.multiplication')
const division = document.querySelector('.division')


plus.addEventListener('click', function plus(){
  const a = +document.querySelector('.a').value
  const b = +document.querySelector('.b').value
  let rus = a + b
  equal.textContent = rus
})
minus.addEventListener('click', function minus(){
  const a = +document.querySelector('.a').value
  const b = +document.querySelector('.b').value
  let rus = a - b
  equal.textContent = rus
})
multiplication.addEventListener('click', function multiplication(){
  const a = +document.querySelector('.a').value
  const b = +document.querySelector('.b').value
  let rus = a * b
  equal.textContent = rus
})
division.addEventListener('click', function division(){
  const a = +document.querySelector('.a').value
  const b = +document.querySelector('.b').value
  let rus = a / b
  equal.textContent = rus
})


function secondsToHMS(seconds) {
  const date = new Date(seconds * 1000); 
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const remainingSeconds = date.getUTCSeconds();

  return {
    hours: hours,
    minutes: minutes,
    seconds: remainingSeconds
  };
}

console.log(secondsToHMS(1000));