"use strict";
//! 1 Тапи і як їх обявляти
//num
// const a = 1
// const b = -10
// const c = 0.14
// const d = 10_000_000
// const f = 1e6
//str
// const a = "test"
// const b = 'test'
// const c = `test`
// boolean
// const a = true
// const b = false
// const a: number = 1000
// const b: string = '2000'
// const c:any = a + b
// console.log(c);
//! 2 Функції і стрілкові функції і що таке any
// function getFullName(firstName: string, surName: string): string {
//   if(typeof firstName !== 'string'){
//     throw new Error('!!!!!!!!!!!!!!!!!!!')
//   }
//   return `${firstName} ${surName}`
// }
// const getFullNameArrow = (firstName: string, surName: string): string => {
//   return `${firstName} ${surName}`
// }
// console.log(getFullName('Den', 'White'));
// console.log(getFullNameArrow(true, false));
//!3 обєкти
// function getFullName(userEntity: {firstName: string, surName: string}): string {
//   return `${userEntity.firstName} ${userEntity.surName}`
// }
// const user = {
//   // firstName: 'Den',
//   surName: 'Tor',
//   age: 28,
//   skills: {
//     dev: true,
//     devops: true
//   }
// }
// console.log(getFullName(user));
//! 4 Масиви
// const skills = ['Dev', 'DevOps']
// const skills: string[] = ['Dev', 'DevOps', 1, true]// err
// const skills: any[] = ['Dev', 'DevOps', 1, true]// any 
// const skills: string[] = ['Dev', 'DevOps', 'QA']
// for (const skill of skills) {
//   console.log(skill.toLowerCase());
// }
// const res = skills
//   .filter((s: string) => s !== 'DevOps')
//   .map(s => s + '! ')
//   .reduce((a, b) => a + b)
// console.log(res);
//! 5 tuples(кортеджи)
// const skills: string[] = ['Dev', 'DevOps', 1, true]// err
// const skills: any[] = ['Dev', 'DevOps', 1, true]// any 
// const skills: [number, string] = [1, 'Dev',]
// const id = skills[0]
// const skillsName = skills[1]
// const test = skills[2]//error
// skills.push('jlkdhfg')
// const test2 = skills[2]
// деструкторизація
// const [id, skillsName] = skills
// const arr: [number, string, ...boolean[]] = [1, 'Dev', true, false, true]
//! readonly
// let  a = 1
// a = 2
// const b = 1
// b = 2
// const skill: readonly [number, string] = [1, 'Dev']
// skill[0] = 3 //error
// console.log(skill[0]);
// const skills: readonly string[] = ['DevOps', 'Dev']
// skills[1] = 'QA'
// skills.push('test')
// const slills: Array<string> = ['DevOps', 'QA']
// const slills: ReadonlyArray<string> = ['DevOps', 'QA']
// skills[0] = 'QA'
//! Enums enum 
// const res = {
//   massage: 'Платіж успішний',
//   statusCode: 1,
//   // statusCode: 'success',
// }
// const SUCCESS = 'success'
// 1 's' - успіх
// 2 'p' - в процесі
// 3 'f' - фейл
// if(res.statusCode === StatusCode.SUCCESS){}
//? enum
// enum StatusCode {
//   SUCCESS = 's',
//   iN_PROCESS = 'p',
//   FAILED = 'f',
// }
// console.log(StatusCode.SUCCESS);
// console.log(StatusCode.iN_PROCESS);
// console.log(StatusCode.FAILED);
// if(res.statusCode === StatusCode.SUCCESS){
// }
//? коректна перевірка
// function action(status: StatusCode){
// }
// action(StatusCode.FAILED)
// action('s')
// action('p')
//?case
// function compute() {
//   return 3
// }
// enum Roles {
//   ADMIN = 1,
//   USER = ADMIN * 2,
//   DEV = compute()
// }
////////////////////////////////////////////////
// enum Direction {
//   UP = 1,
//   DOWN,
//   LEFT,
//   RIGHT
// }
// let myDerection: Direction = Direction.DOWN
// console.log(myDerection);
// enum Color {
//   RED = 'red',
//   GREEN = 'green',
//   BLUE = 'blue',
// }
// let myColor: Color = Color.RED
// let myColor1: Color = Color.GREEN
// console.log('✌️myColor --->', myColor);
