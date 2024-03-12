const input = document.querySelector('.lists')
const pencil = document.querySelector('#pencil')
const ul = document.querySelector('.todos')
/////////////////////////////////////////////////
const all = document.querySelector('.all')
const active = document.querySelector('.active')
const performed = document.querySelector('.performed')
////////////////////////////////////////////////////
const save = document.querySelector('.save')
const clear = document.querySelector('.clear')
const tips = document.querySelector('.tips')
////////////////////////////////////////////////////


// input display none and blok
pencil.addEventListener('click', () => {
  input.classList.toggle('display')
})

//add li
input.addEventListener('keypress', (e) => {
  if (e.which === 13) {
    let text = input.value
    input.value = ''
    add(text)
  }
})

function add(text) {
  const li = document.createElement('li')
  const span = document.createElement('span')
  const i = document.createElement('i')
  li.textContent = text
  i.classList.add('fas', 'fa-trash-alt')
  span.insertAdjacentElement('afterbegin', i)
  li.insertAdjacentElement('afterbegin', span)
  ul.insertAdjacentElement('beforeend', li)
}

// закреслення і видалення


ul.addEventListener('click', (e) => {
 if(e.target.tagName === 'LI'){
  e.target.classList.toggle('checked')
 }
 if (e.target.tagName === 'I') {
    e.target.parentElement.parentElement.remove()
 }
})


// active
active.addEventListener('click', () => {
  const li = document.querySelectorAll('.todos li')
  for (let i = 0; i < li.length; i++) {
    li[i].style.display = 'list-item'
    if(li[i].className === 'checked') {
      li[i].style.display = 'none'
    } 
  }
})

