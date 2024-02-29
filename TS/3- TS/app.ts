
//! 1 UNION '|'

// const arr = ['32', 1, true]

// function logId(id: string | number):void{
//   console.log(id);
// }

// logId(1)//valid
// logId('234')//valid
// logId(true)//not valid

//? звуження типів 

//1 string | number | boolean
function logId(id: string | number | boolean){
  if(typeof id === 'string'){
    console.log(id.toLowerCase());
  } else if(typeof id === 'number'){
    console.log(id.toFixed(0));
  } else {
    console.log(id);
  }
}

//2 string and array
function logError(err: string | string[]){
  if(Array.isArray(err)){
    err.forEach(err => console.log(err))
  } else {
    console.log(err);
  }
}

//3 obj | obg

function logObject(obj: {a: number} | {b: number}){
  if('a' in obj){
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

//4 a: string | number b: string | boolean

function logIds(a: string | number, b: string | boolean) {
  if (a === b){// a: string and b: string
    console.log(a,b);
  } else {
    console.log(a,b);// a i b string num and boolean
  }
}


//!2 LITERAL TYPES 

//? 1 ЛІТЕРАЛЬНІ ТИПИ ЧИСЕЛ

let num: 1 = 1
console.log(typeof num);

// num = 2
// const test = 1
// test =2

// let score: 0 | 1 | 2 = 2
// score = 0//ok
// score = 1//ok
// score = 3//error

//? 2 ЛІТЕРАЛЬНІ ТИПИ string
// let color: 'red' = 'red'
// let statuss: 'success' | 'error' | 'pending' = 'success'
// statuss = "error"
// statuss = "pending"
// statuss = "pendinglkfjg;h"

//? 3 ЛІТЕРАЛЬНІ ТИПИ boolean
// let isTrue: true = true
// isTrue = false//error
// let flag: true | false = true
// flag = false

//! приклад з fun

//post, get, del
// function fetchAuth(url: string, method: string){
//   fetch(method)
// }

//* 1 enum
// enum ReqType {
//   GET = 'get',
//   POST = 'post',
//   DEL = 'del',
// }

// function fetchAuth(url: string, method: ReqType){
//   fetch(method)
// }

//* 2 leteral

// function fetchAuth(url: string, method: 'post' | 'get' | 'delete'){
//   fetch(url)
// }
// fetchAuth('s', 'post')
// fetchAuth('s', 'delete')
// fetchAuth('s', 'getlsdjfhgkl;hj')

// const method = '1'

// fetchAuth('s', method as 'post')
//? літерали і юніон типи в поаертнні фун

// function fetchAuth(url: string, method: 'post' | 'get' | 'delete'): 1 | -1{
//   return -1
// }

//! type Aliases

// type httpMethod = 'post' | 'delete' | 'get'
// type coolString = string

// function fetchWithAuth(url: coolString, method: httpMethod):void{
//   fetch(url)
// }
//* type з обєктами
// const user: {
//   name: string,
//   age: number,
//   slills: string[]
// } = {
//   name: 'Alex',
//   age: 28,
//   slills: ['1','2']
// }
// ////////////////////////////////////

// type User = {
//   name: string,
//   age: number,
//   slills: string[]
// }

// const user: User = {
//   name: 'Alex',
//   age: 28,
//   slills: ['1','2']
// }

//* обєднання type

type User = {
  name: string,
  age: number,
  slills: string[]
}

type Role = {
  nameRole: string,
  id: number
}

type UserWithRole = User & Role
//! intersection  &

const user: UserWithRole = {
  name: 'Alex',
  age: 28,
  slills: ['1','2'],
  nameRole: 'ADMIN',
  id: 123
}

//! 4 interface