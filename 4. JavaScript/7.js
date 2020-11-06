
let form = document.getElementsByTagName('form')[0]
form.addEventListener('submit', function(event){
    event.preventDefault()

    //get the values submitted
    let description = event.target[0].value
    let quantity = event.target[1].value

    let tr = document.createElement('tr') //create a new line

    let td1 = document.createElement('td')
    td1.innerHTML = description

    let td2 = document.createElement('td')
    let quant = document.createElement('input')
    quant.setAttribute('type', 'number')//to allow to have the key up and down and add it to total 
    quant.setAttribute('value', quantity)
    td2.append(quant);

    let td3 = document.createElement('td')
    let button = document.createElement('input')
    button.setAttribute('type', 'submit')
    button.setAttribute('value', 'Remove')
    td3.append(button)

    button.onclick = (event) =>{ //whats new
        event.preventDefault()
        tr.remove()
    }

    tr.append(td1)
    tr.append(td2)
    tr.append(td3)

    document.querySelector('#products tbody').append(tr)


    alert('Submitted!')

})


let secondInput = document.querySelector('form label:nth-child(2) input');
console.log(secondInput); 

let allInputs = document.querySelectorAll('form label input');
for(let input of allInputs)
    console.log(input);
    
/*
Better solution
let form = document.getElementsByTagName('form')[0];
console.log(form.outerHTML);
 
let secondInput = document.querySelector('form > label:nth-child(2) input');
console.log(secondInput.outerHTML);
 
let inputs = document.querySelectorAll('form label input');
for (let input of inputs) {
    console.log(input.outerHTML);
}
 
form.addEventListener('submit', function(event) {
    event.preventDefault();
 
    const description = event.target[0].value;
    const quantity = event.target[1].value;
 
    let tr = document.createElement('tr');
 
    tr.innerHTML = `<tr><td>${description}</td><td><input type='number' value=${quantity}></td><td><input type='button' value='Remove'></td></tr>`
 
    tr.querySelector('td:nth-child(3) input').onclick = function(event) {
        event.preventDefault()
        tr.remove()
    }
    
    document.getElementById('products').append(tr);
})

*/