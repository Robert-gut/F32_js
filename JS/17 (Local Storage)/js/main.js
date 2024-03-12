// const frontEnd = 'front end 32'
// const age = 1


//! setItem() записує дані в локал сторедж
// localStorage.setItem('group', frontEnd)
// localStorage.setItem('age', age)

//! получіти дані з localStorage

// console.log(localStorage.getItem('group'));

// console.log(localStorage.getItem('age'));
// console.log(typeof localStorage.getItem('age'));

//! видалення даних з  localStorage

// localStorage.removeItem('age')

//! видалення всі дані з  localStorage

// localStorage.clear()

//? object

const frontEnd = {
  groupName: 'front end 32',
  age: 1
}


// 1///////////////////////////
localStorage.setItem('objTest', frontEnd)

console.log(localStorage.getItem('objTest'));

// 2 /////////////////////////

localStorage.setItem('obj', JSON.stringify(frontEnd))

console.log(localStorage.getItem('obj'));
console.log(typeof localStorage.getItem('obj'));

const objStr = localStorage.getItem('obj')//string

const cours = JSON.parse(objStr)
console.log('✌️cours --->', cours);


console.log(localStorage.key(0));



