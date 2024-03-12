const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

async function privarbank (){
  try {
    const fileCors = await fetch(url)
    const dataCors = await fileCors.json()
    return dataCors
  } catch (error) {
   console.error(error); 
  }
}

const test = privarbank()
console.log('✌️test --->', test);
