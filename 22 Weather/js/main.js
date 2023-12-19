

const input = document.querySelector('input')

window.addEventListener('keypress', (e)=>{
  if(e.key === 'Enter'){
    add()
  }
})

document.querySelector('button').addEventListener('click', add)

function add() {
  if(input.value.length === 0){
    input.style.borderColor = 'red'
  }else{
    const cityName = input.value
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=ua&units=metric&appid=33a4edb2fe337fd387e632012d97d0de`
    weather(url)
  }
}


const weather = async(url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log('✌️response --->', response);
    console.log('✌️data --->', data);
    if(response.status === 404){
      input.style.borderColor = 'red'
    }
  } catch (error) {
    console.error('Error', error)
  }
}