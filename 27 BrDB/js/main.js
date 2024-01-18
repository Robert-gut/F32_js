const saveDataBtn = document.querySelector('#saveData')
saveDataBtn.addEventListener('click', savaData)

function savaData() {
  const data = document.getElementById('dataInput').value

  // LS
  localStorage.setItem('localData', data)
  displayLocalStorageData()

  //SS
  sessionStorage.setItem('sessionData', data)
  displaySessionStorageData()

  // Cookie
  document.cookie = `cookieData=${data}; expires=${new Date(Date.now() + 86400000).toUTCString()}; secure; `
  displayCookieData()
}


function displayLocalStorageData() {
  const data = localStorage.getItem('localData')
  document.getElementById('localStorageOutput').innerHTML = data ? `Data: ${data}` : 'No data stored in LocalStorage'
}
function displaySessionStorageData() {
  const data = sessionStorage.getItem('sessionData')
  document.getElementById('sessionStorageOutput').innerHTML = data ? `Data: ${data}` : 'No data stored in SessionStorage'
}
function displayCookieData() {
  const cookies = document.cookie.split(';')
  const cookieData = cookies.find(cookie => cookie.trim().startsWith('cookieData='))
  document.getElementById('cookieOutput').innerHTML = cookieData ? `Data: ${cookieData.split('=')[1]}` : 'No data stored in LocalStorage'
}

displayLocalStorageData()
displaySessionStorageData()
displayCookieData()

function clearLS(){
  localStorage.clear()
  displayLocalStorageData()
}
function clearSS(){
  sessionStorage.clear()
  displaySessionStorageData()
}
function clearC(){
  document.cookie = `cookieData=; max-age=-1`
  displayCookieData()
}



document.getElementById('clearLS').addEventListener('click', clearLS)
document.getElementById('clearSS').addEventListener('click', clearSS)
document.getElementById('clearC').addEventListener('click', clearC)