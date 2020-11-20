let form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function(event){
    event.preventDefault()
    alert('Submitted!')
    console.log(form)
})


let secondInput = document.querySelector('form label:nth-child(2) input')
console.log(secondInput.outerHTML) //example of last point

let allInputs = document.querySelectorAll('form label input')
for(let input of allInputs)
    console.log(input)
