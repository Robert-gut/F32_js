// !1 ІНЕФПСУЛЯЦІЯ В OOP

class Person {
  #name
  #age

  constructor(name, age){
    this.#name = name
    this.#age = age
  }

  #printDatails(){
    console.log(`${this.#name} is ${this.#age} years old.`);
  }

  showDatails(){
    this.#printDatails()
  }

  setAge(newAge){
    if(newAge >= 0){
      this.#age = newAge
    }else{
      console.error('Invalid age!');
    }
  }

}

const person1 = new Person('Rob', 100)
console.log('✌️person1 --->', person1);

console.log(person1.name);
console.log(person1.age);

// person1.#printDatails()

person1.setAge(18)

person1.showDatails()



// !2 ПОЛІМОРФІЗМ В OOP

class Shape {

  constructor(){
    this.type = 'Shape'
  }

  printType(){
    console.log(`This is a ${this.type}.`);
  }
}

class Circle extends Shape {
 constructor(radius){
  super()
  this.type = 'Circle'
  this.radius = radius
 }

 printType(){
  super.printType()
  console.log(`radius ${this.radius}`);
 }
}

class Rectangle extends Shape {
 constructor(width, height){
  super()
  this.type = 'Rectangle'
  this.width = width
  this.height = height
 }

 printType(){
  super.printType()
  console.log(`width ${this.width}, height ${this.height}`);
 }
}

const circle = new Circle(5)
const rectangle = new Rectangle(5, 6)

circle.printType()
rectangle.printType()


function printShapeType(shape) {
  shape.printType()
}

printShapeType(circle)

// !2 наслідування В OOP

class Animal {
  constructor(name, type){
    this.name = name
    this.type = type
  }

  showType(){
    console.log(this.type);
  }
}

class Dog extends Animal {
  constructor(name, type, breed){
    super(name, type)
    this.breed = breed || 'Unknown Breed'
  }
  makeSound() {
     console.log('Woof! Woof!');
  }
}

class Shepherd extends Dog{
  constructor(name, breed, type){
    super(name, type, breed)
  }
}

const Bob = new Shepherd('Bob', 'Shepherd', 'Dog')

Bob.makeSound()
Bob.showType()

// ! Абстракція в oop

class Animal{} 
 
  class Dog extends Animal{}
    class Shepherd extends Dog{}
    class Taxa extends Dog{}

  class Cat extends Animal{}
    class British extends Cat{}
    class Taxa extends Cat{}