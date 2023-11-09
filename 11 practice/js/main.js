const input = document.querySelector('input')
const btn = document.querySelector('button')


window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addLeters()
    }
})


const addLeters = () => {
    let letters = {}

    for(let i = 0; i < input.value.length; i++){
        for(let b = 0; b <= Object.keys(letters).length; b++){
            if(input.value[i] !== Object.keys(letters)[b]){
                letters[input.value[i]] = 0
            }
        }
    }

    for (let b = 0; b < Object.keys(letters).length; b++) { 
        for (let i = 0; i < input.value.length; i++) {
            if(input.value[i] === Object.keys(letters)[b]){
                letters[Object.keys(letters)[b]] += 1
            }  
        }
    }
    console.log(letters);
    /////////////////////////////////////////////////

    let keySort = Object.keys(letters).sort((a, b) => letters[b] - letters[a])
    console.log(keySort);
    ///////////////////////////////////////////////////

    let ul  = document.querySelector('ul')
    let input_length = input.value.length

    for (let i = 0; i < keySort.length; i++) {
        let sumbol = keySort[i]
        let interest = letters[sumbol] / input_length * 100
        ul.insertAdjacentHTML('beforeend',
        `<li>"${sumbol}": ${letters[sumbol]} - ${interest.toFixed(3)} %</li>`
        )   
    }
}




btn.addEventListener('click', addLeters)