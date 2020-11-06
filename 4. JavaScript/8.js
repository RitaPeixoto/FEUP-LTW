function updateTotal(){
    let tr = document.querySelectorAll('#products tbody tr');
    let total = 0;

    tr.forEach((line) => {
        
        if (line.children[0].tagName != 'TH') {
            inputValue = line.children[1].children[0].value;
            console.log(parseInt(inputValue))
            total += parseInt(inputValue);
        }
    })
    
    document.getElementById('total').innerHTML = total;

}



let form = document.getElementsByTagName('form')[0]
form.addEventListener('submit', function(event){
    event.preventDefault()

    //get the values submitted
    let description = event.target[0].value
    let quantity = event.target[1].value

    
    let tr = document.createElement('tr') //create a new line

    let td1 = document.createElement('td')
    td1.innerHTML = description
    tr.append(td1)

    let td2 = document.createElement('td')
    let quant = document.createElement('input')
    quant.setAttribute('type', 'number')//to allow to have the key up and down
    quant.setAttribute('value', quantity)
    td2.append(quant)
    tr.append(td2)

    quant.addEventListener('change', function(event){
        updateTotal();
    })



    let td3 = document.createElement('td')
    let button = document.createElement('input')
    button.setAttribute('type', 'submit')
    button.setAttribute('value', 'Remove')
    td3.append(button)
    tr.append(td3)

    button.onclick = (event) =>{ 
        event.preventDefault()
        tr.remove()
        updateTotal()
    }

    
    
    

    document.querySelector('#products tbody').append(tr)

    updateTotal()

    alert('Submitted!')

})


let secondInput = document.querySelector('form label:nth-child(2) input');
console.log(secondInput); 


let allInputs = document.querySelectorAll('form label input');
for(let input of allInputs)
    console.log(input);
