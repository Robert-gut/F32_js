class Dog{
  static maxWeight = 150 

  constructor(name, breed, age){
    this.name = name;
    this.breed = breed;
    this.age = age
  }

  ShowDogInfo(){
    console.log('Name: ', this.name, ' Breed: ', this.breed, ' Age: ', this.age);
    return `Name: ${this.name}, Breed: ${this.breed},  Age: ${this.age} `
  }

}

const Bob = new Dog('Bob', 'Taxa', 3)
const Jack = new Dog('Jack', 'Shepherd', 6)
console.log('✌️Jack --->', Jack);
console.log('✌️Bob --->', Bob);

Bob.ShowDogInfo()
Jack.ShowDogInfo()

console.log(Dog.maxWeight);

console.log(Bob.maxWeight);
console.log(Jack.maxWeight);


// мисливський пес

class HunterDog extends Dog{
  constructor(name, breed, age, power){
    super(name, breed, age)
    this.power = power
  }

  PlusHealth(hp){
    console.log(`Power: ${this.power}(${this.name})`);
    this.power += hp
    console.log(`Power: ${this.power}(${this.name})`);
  }

  MinusHealth(hp){
    console.log(`Power: ${this.power}(${this.name})`);
    this.power -= hp
    console.log(`Power: ${this.power}(${this.name})`);
  }

  ShowDogInfo(){
    console.log('Name: ', this.name, ' Breed: ', this.breed, ' Age: ', this.age, ' Power: ', this.power);
  }

}

const Rex = new HunterDog('Rex', 'Bulldog', 4, 100)
console.log(Rex);
console.log(HunterDog.maxWeight);
Rex.ShowDogInfo()
Rex.PlusHealth(50)
Rex.MinusHealth(60)
Rex.ShowDogInfo()

class Cat extends Dog{
  constructor(name, breed, age, color){
    super(name, breed, age)
    this.color = color
  }

  ShowCatInfo(){
    console.log(super.ShowDogInfo(), ', Color: ', this.color);
  }

}

const Murchik = new Cat('Murchik', 'British', 2, 'black')
Murchik.ShowDogInfo()

Murchik.ShowCatInfo()