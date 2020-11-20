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
    let description = document.getElementsByName("description")[0].value
    let quantity = document.getElementsByName("quantity")[0].value

    let tr = document.createElement('tr') //create a new line
 
    tr.innerHTML = `<tr><td>${description}</td><td><input type='number' value=${quantity}></td><td><input type='button' value='Remove'></td></tr>`
 
    tr.querySelector('td:nth-child(2) input').keyup = function(event){
        updateTotal()
    }
    tr.querySelector('td:nth-child(2) input').keydown = function(event){
        updateTotal()
    }
    tr.querySelector('td:nth-child(3) input').onclick = function(event) {
        tr.remove()
        updateTotal()
    }
        

    document.getElementById('products').append(tr);

    updateTotal()

    alert('Submitted!')

})


let secondInput = document.querySelector('form label:nth-child(2) input');
console.log(secondInput); 


let allInputs = document.querySelectorAll('form label input');
for(let input of allInputs)
    console.log(input);

