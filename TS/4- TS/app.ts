//? void 

// function logId(id: string | number): void{
//   console.log(id);
// }

// const a = logId(34)
// console.log('✌️a --->', a);

// function multiply(a: number, b?: number){
//   if(!b){
//     // return a * a
//   }
//   // return a * b
// }

// type voidFunc = () => number | undefined | string

// const f1: voidFunc = () => {

// }

// const f2: voidFunc = () => {
//   return true
// }

// const test = f2()
// console.log('✌️test --->', test);


// const skills = ['DEV', 'DevOps']

// const user = {
//   s: ['']
// }

// skills.forEach((skill) => user.s.push(skill))

//? 2 Unknown 

// let input: unknown

// input = 3
// // input = ['dev', 'qa']

// // const res: string = input

// // const ress: any = input


// //! case 1 

// function run(i: unknown):void{
//   if(typeof i === 'number'){
//     i++
//   } else {
//     i
//   }
// }

// run(input)

//! case 2

// async function getData() {
//   try {
//     await fetch('')
//   } catch (error) {
//     // console.log(error.massage);
//     if(error instanceof Error){
//       console.log(error.message); 
//     } else{
//       console.log(error); 
//     }
//   }
// }

// async function getDataForce() {
//   try {
//     await fetch('')
//   } catch (error) {
//       const e = error as Error
//       console.log(e.message);
//   }
// }

//! з іншими типами даних

// type U1 = unknown | number//unknown

// type I1 = unknown & string//string

//? 3 Nuver 

//! 1 case функція не вертається 
// function genereateErrror(message: string):never{
//   throw new Error(message)
// }

// if () {
//   genereateErrror('test')
//   console.log(';laskdfhj');
// }

//!2 case безкінечний цикл

// function dumError():never{
//   while(true){}
// }
// dumError()
// console.log();

//! 3 case рекурсія

// function rec():never{
//   return rec()
// }

// const a: never = undefined


///////////////////////////////////////////////

// type paymentAction = 'refund' | 'checkout' | 'reject'

// function processAction(action: paymentAction){
//   switch(action) {
//     case 'refund':
//       console.log('refund');
//       break
//     case 'checkout':
//       console.log('checkout');
//       break
//     case 'reject':
//       console.log('reject');
//       break
//     default:
//       const _: never = action
//       throw new Error('немає такого екшена')
//   }
// }

//! new case

// function isString(x: string | number):boolean {
//   if (typeof x === 'string') {
//     return true
//   } else if( typeof x === 'number'){
//     return false
//   }
//   genereateErrror('message')
// }

//? 4 Null 
// const n: null = null 
// const n1: any = null 
// const n2: string = null 
// const n3: number = null 
// const n3: undefined = null 
// const n3: boolean = null 


// interface IUser {
//   name: string
// }

// function getUser(): IUser | null{
//   if (Math.random() > 0.5) {
//     return null
//   }else{
//     return {
//       name: 'Riki',
//     } as IUser
//   }
// }

// const user = getUser()
// console.log('✌️user --->', user);
// // const person = user.name

// if(user){
//   const person = user.name
// }

// //?5 перетворення типів

// let a = 5
// let b: string = a.toString()

// let c = 'as;ldkfj'
// let d: number = parseInt(c)

// //! obj

// interface IUser {
//   name: string,
//   email: string,
//   login: string,
// }

// const person: IUser = {
//   name: 'tor',
//   email: 'tor@gmail.com',
//   login: 'odinson',
// }

// const person1 = <IUser>{
//   name: 'tor',
//   email: 'tor@gmail.com',
//   login: 'odinson',
// }

// const person2 = {
//   name: 'tor',
//   email: 'tor@gmail.com',
//   login: 'odinson',
// } as IUser

// const person: IUser = {
//   name: 'tor',
//   email: 'tor@gmail.com',
//   login: 'odinson',
// }

// interface IAdmin{
//   name: string,
//   role: number
// }

// const admin: IAdmin = {
//   ...person,
//   role: 1
// }
// console.log('✌️admin --->', admin);

// function userToAdmin(user: IUser): IAdmin{
//   return{
//     name: user.name,
//     role: 1
//   }
// }

// const test = userToAdmin(person)
// console.log('✌️test --->', test);



//?  type guard

// function logId(id: string | number){
//   if(typeof id === 'string'){
//     id.length
//   } else if (typeof id === 'number'){
//     id.toFixed(3)
//   }
//   id
// }

// function logId2(id: string | number){
//   if(isString(id)){
//     console.log(id);
//   } else if(typeof id === 'number'){
//     console.log(id);
//   }
//   id
// }

// function isString(x: string | number): x is string{
//   return typeof x === 'string'
// }

// ! new case 2

interface IUser {
  name: string,
  email: string,
  login: string,
}

const person: IUser = {
  name: 'tor',
  email: 'tor@gmail.com',
  login: 'odinson',
}

interface IAdmin{
  name: string,
  role: number
}

function isAdmin(user: IUser | IAdmin): user is IAdmin{
  return 'role' in user
}

function setRoleZero(user: IUser | IAdmin){
  if(isAdmin(user)){
    user.role = 0
  } else {
    user
    throw new Error('user is not admin')
  }
}