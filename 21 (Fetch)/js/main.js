// ! HTTP МЕТОДИ:

//! GET - запит на отримання даних з сервера
//! POST - запит на створення нових даних на сервері
//! PUT - запит на оновлення даних на сервері
//! DELETE - запит на ВИДАЛЕННЯ даних на сервері


//! XMLHttpRequest

// const url = 'https://jsonplaceholder.typicode.com/users'

// const sendReq = (method, url) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open(method, url)
//     xhr.responseType = 'json'
//     xhr.onload = () => {
//       if(xhr.status >= 401){
//         reject(xhr.status)
//       }else{
//         resolve(xhr.response)
//       }
//     }
//   xhr.send()
//   })
// }

// sendReq('GET', url)
// .then(data => console.log(data))
// .catch(err => console.error(err))


//! Fetch

const url = 'https://jsonplaceholder.typicode.com/users'

const btn = document.querySelector('#load')
btn.addEventListener('click', request)

function request() {
  
  fetch(url)
    .then(response => {
      console.log('✌️response --->', response);
      btn.setAttribute('disabled', true)
      return response.json()
    })
    .then(data => {
      console.log('✌️data --->', data);
      const list =  document.querySelector('.list')
      const elem = data.map(item => {
        return `<li>${item.name} ${item.email} ${item.phone}</li>`
      })
      list.insertAdjacentHTML('afterbegin', elem.join(' '))
    })
    .catch(error => console.error('Error', error))
}