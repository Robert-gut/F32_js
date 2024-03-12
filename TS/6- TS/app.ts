//? generic

//?1 Приклади встроїних джейнеріків

// const a: Array<number> = [1, 2, 3]
// const a1: Array<string> = [1, 2, 3]

// async function test() {
//   const a = await new Promise<number>((resolve, reject) => {
//     resolve(1)
//   })
// }

////////////////////////////////////////////////////

//! Record<K, V>

// const check: Record<string, boolean> = {
//   drive: true,
//   kpp: false
// }

//? 2 Напишем функцію з джейнеріками

// function logMiddlewere(data:number): number{
//   console.log(data);
//   return data 
// }

// const res = logMiddlewere(33)

//////////////////////////////////////////////////

// function logMiddlewere1(data: number | string): number | string{
//   console.log(data);
//   return data 
// }

// const res1 = logMiddlewere1('33')

/////////////////////////////////////////////////generic

// function logMiddlewere2<T>(data: T): T{
//   console.log(data);
//   return data 
// }

// const res2 = logMiddlewere2<number>(33)
// const res22 = logMiddlewere2<string>('33')


/////////////////////////   Array   ////////////////////////

// function getSplitHalf<T>(data: Array<T>): Array<T> {
//   const l = data.length / 2
//   return data.slice(0, 1)
// }

// getSplitHalf([1, 2, 3])
// getSplitHalf<string | number>(['1', '2', 3])
// getSplitHalf<string>(['1', '2', '3'])
// getSplitHalf<boolean>([true, false])

 
//? 3 трішки практики

// function toString<T>(data: T): string | undefined{
//   if(Array.isArray(data)){
//     return data.toString()
//   }
//   switch (typeof data) {
//     case 'string':
//       return data
//     case 'number':
//     case 'symbol':
//     case 'bigint':
//     case 'boolean':
//     case 'function':
//       return data.toString()
//     case 'object':
//       return JSON.stringify(data)
//     default:
//       return undefined
//   }
// }

// function added(a: number, b:number): number{
//   return a + b
// }

// console.log(toString(2));
// console.log(toString<boolean>(true));
// console.log(toString<string[]>(['a', 'b']));
// console.log(toString<{a: string}>({a:'a'}));
// console.log(toString<{a: string}>({a:'a'}));
// console.log(toString(added));

//? 4 використання в типах


// function getSplitHalf<T>(data: Array<T>): Array<T> {
//   const l = data.length / 2
//   return data.slice(0, 1)
// }

// getSplitHalf([1,2,3])

// //! const
// const split: <T>(data: Array<T>) => Array<T> = getSplitHalf

// //! інтерфейси
// interface ILogLine<T>{
//   timeStamp: Date,
//   data: T
// }

// //! type

// type LogLineType<T> = {
//   timeStamp: Date
//   data: T
// }

// const logLine: ILogLine<{a: number}> = {
//   timeStamp: new Date(),
//   data:{
//     a: 1
//   }
// }

//? 5 обмеження джейнеріків

// class Vehicle{
//   run: number
// }

// function kmToMiles<T>(vehicle: T): T{
//   vehicle.run = vehicle.run / 0.62
//   return vehicle
// }

// function kmToMiles<T extends Vehicle>(vehicle: T): T{
//     vehicle.run = vehicle.run / 0.62
//     return vehicle
// }

// class LCV extends Vehicle {
//   capacity: number
// }

// const vehicle = kmToMiles(new Vehicle())
// const vehicle1 = kmToMiles({a: 1})
// const vehicle2 = kmToMiles({run: 1})
// const vehicle3 = kmToMiles(new LCV())


//! ми можемо юзати декілька джейнеріків

// function logId<T extends string | number, Y>(id: T, additionalDate: Y): {id: T, data: Y}{
//   console.log(id);
//   console.log(additionalDate);
//   return {id, data: additionalDate}
// }

// logId<string, number>('345', 3465)

//? 6 практики

// const data = [
//   {id: 1, name: 'Ben'},
//   {id: 2, name: 'Den'},
//   {id: 3, name: 'Jon'}
// ]

// interface ID {
//   id: number
// }

// function sort<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[]{
//   return data.sort((a, b) => {
//     switch (type){
//       case 'asc':
//         return a.id - b.id
//       case 'desc':
//         return b.id - a.id
//     }
//   })
// }

// console.log(sort(data, 'desc'));
// // console.log(sort(data));


//? 7 класи

// class Resp<D, E> {
//   date?: D
//   error?: E

//   constructor(date?: D, error?: E) {
//     if(date){
//       this.date = date
//     }
//     if(error){
//       this.error = error
//     }
//   }
// }

// const res = new Resp<string, number>('data')
// res.error

// //! наслідування 

// class HTTPResp<F> extends Resp<string, number>{
//   code: F

//   setCode(code: F){
//     this.code = code
//   }
// }

// const res2 = new HTTPResp<number>()

