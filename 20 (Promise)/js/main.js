// ? Promise

// console.log('111');

// setTimeout(()=>{
//   console.log('pr 1');
//   setTimeout(()=>{
//     console.log('pr 2');
//       setTimeout(()=>{
//         console.log('pr 2');
//         setTimeout(()=>{
//           console.log('3 + 2 + 1');
//         },2000)
//       },3000)
//   },4000)
// },5000)

// console.log('2222');

console.log('1');


const promise = new Promise(function(resolve, reject){
  setTimeout(()=>{
    console.log('Start process');
    resolve()//ok
    // reject('Bed idea!') // коли в нас є якась помилка
  }, 2000)
})
.then(function() {
  return new Promise(function(resolve, reject){
   setTimeout(()=>{
    const car = {
      brand: 'Tesla',
      model: 'X'
    }
    console.log('You want to buy:', car.brand, car.model);
    resolve(car)// передаємо автомобіль до наступного then
    // reject('Not enough money!')
   }, 2000) 
  })
})
.then(car => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log('CTO checking...');
      const carWithTechStatus = {
        ...car,
        techStatus: 'checked'
      }
      console.log('Technical status: ', 
      carWithTechStatus.brand,
      carWithTechStatus.model,
      carWithTechStatus.techStatus);
      resolve(carWithTechStatus)//ok
      // reject('Technical status bad!')//err
    }, 2000)
  })
})
.then(car => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log('Police checking...')
      const carWithPoliceStatus = {
        ...car,
        policeStatus: 'checked'
      }
      console.log('Police status: ', 
      carWithPoliceStatus.brand,
      carWithPoliceStatus.model,
      carWithPoliceStatus.policeStatus)
      // resolve(carWithPoliceStatus)//ok
      reject('Police status bad!')//err
    }, 2000)
  })
})
.then(car => {
  return new Promise((resolve, reject)=>{
    console.log('Status car...')
    const carWithFinalStatus = {
      ...car,
      status: 'bought'
    }
    console.log('Car status: ', carWithFinalStatus.status);
    resolve(carWithFinalStatus)
    // reject('Opsss!')
  })
})
.then(car => {
  return new Promise((resolve, reject)=>{
    console.log('You bought a car!!!!!!!!!!!!!!');
    console.log(car);
    resolve()
  })
})
.catch(function(error){
  console.error(error);
})
.finally(()=>console.log('Finish process!'))


console.log('2');
console.log('3');
console.log('4');
console.log('5');
console.log('6');



function createPromise(val){
  return new Promise((resolve, reject)=>{
    resolve(val)
  })
}

createPromise('Robert!!')
.then((val)=>{
  console.log(val);
})
.catch(err => {
  console.log(err);
})