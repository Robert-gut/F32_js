//? class

//? 1 створення класа 

// class User {
//   name: string

//   constructor(name: string){
//     this.name = name
//   }
// }

// const user = new User('Roman')
// console.log(user);
// user.name = 'Ben'
// console.log(user);

// //"strictPropertyInitialization": false,
// class Admin {
//   role: number
// }

// const admin = new Admin()
// admin.role = 1


//? 2 конструктори, оверлоуд , перезагрузка

// class User {
//   name: string
//   age: number

//   constructor()//! перезагрузки
//   constructor(name: string)
//   constructor(age: number)
//   constructor(name: string, age: number)
//   constructor(ageOrName?: string | number){//! імпілітацій
//     if(typeof ageOrName === 'string'){
//       this.name = ageOrName;
//     }else if (typeof ageOrName === 'number') {
//       this.age = ageOrName 
//     }
//   }
// }

// const user1 = new User()
// console.log('✌️user1 --->', user1);

// const user2 = new User('user')
// console.log('✌️user2 --->', user2);

// const user3 = new User(34)
// console.log('✌️user3 --->', user3);

// const user4 = new User('name', 34)
// console.log('✌️user4 --->', user4);

//? 3 методи класів

// enum PaymentStatus {
//   Holded,//! заброньовіані но не списані кошти
//   Processed,//! списані
//   Reversed,//! відміна
// }

// class Payment {
//   id: number
//   status: PaymentStatus
//   createdAt: Date
//   updateAt: Date

//   constructor(id: number){
//     this.id = id
//     this.createdAt = new Date()
//     this.status = PaymentStatus.Holded
//   }

//   ///////////// методи ////////
//   getPaymentLifeTime():number {
//     return new Date().getTime() - this.createdAt.getTime()
//   }

//   unholdPayment(): void{
//     if(this.status === PaymentStatus.Processed){
//       throw new Error('Платіж не може бути поверненим')
//     }
//     this.status = PaymentStatus.Processed
//     this.updateAt = new Date()
//   }
// }

// const payment = new Payment(123)
// console.log('✌️payment --->', payment);
// payment.unholdPayment()
// console.log('✌️payment --->', payment);
// const time = payment.getPaymentLifeTime()
// console.log('✌️time --->', time);


//? 4 перезагрузка методів

// class User {
//   skills: string[]

//   addSkill(skill: string): void
//   addSkill(skills: string[]): void
//   addSkill(skillOrSkills: string | string[]): void{
//     if(typeof skillOrSkills === 'string'){
//       this.skills.push(skillOrSkills)
//     } else {
//       this.skills.concat(skillOrSkills)
//     }
//   }
// }

// new User().addSkill()

//? 5 гетери і сетери

// class User{
//   _login: string
//   password: string

//   set login(l: string){
//     this._login = 'user-' + l
//   }
  
//   get login(){
//     return 'no_login'
//   }
// }

// const user = new User()
// user.login = 'myLogin'
// console.log('✌️user --->', user);
// console.log(user.login);

//? 6 наслідування (extends)

// type PaymentStatus = 'new' | 'paid'

// class Payment {
//   id: number
//   status: PaymentStatus = 'new'

//   constructor(id: number){
//     this.id = id
//   }

//   pay(): void{
//     this.status = 'paid'
//   }

//   any(){}
// }

// class PersistedPayment extends Payment {
//   databaseId: number
//   paidAt: Date
  
//   constructor(){
//     const id = Math.random()
//     super(id)
//   }

//   save(){

//   }

//   override pay(date?: Date){
//     super.pay()
//     if(date){
//       this.paidAt = date
//     }
//   }
// }

// new PersistedPayment()

//? 7 видимісьть властивостей і методів

// class Vehicle {
//   public make: string//! є публічною властивісьтю
//   private damages: string[]//! доступне в середині но не доступне на зовні
//   private _model: string//! доступне в середині но не доступне на зовні
//   protected run: number//! доступний наслідникам
//   #price: number //!доступне в середині но не доступне на зовні

//   set model(m: string){
//     this._model = m
//   }
//   get model(): string{
//     this.run
//     return this._model
//   }

//   addDamage(damage: string): void{
//     this.damages.push(damage)
//   }
// }

// new Vehicle().make = 'test'//public
// new Vehicle().model //get
// new Vehicle().model = 'test'//set
// new Vehicle().run//err
// new Vehicle().//err

// class EuroTruck extends Vehicle {
//   setDamage(){
//     this.//ми не бачімо публічні поля 
//   }

//   setRun(km: number){
//     this.run = km/ 0.62
//   }
// }
// new EuroTruck().setRun(34)

//?8 статичні

// class UserService {
//   private static db: any

//   static getUser(id: number){
//     // return this.db.findBy(id)
//     return UserService.db.findBy(id)
//   }

//   create(){
//     UserService.db
//   }
// }

// UserService.db//err
// UserService.getUser(1)
// UserService.
// const inst = new UserService()
// inst.create()
// inst.