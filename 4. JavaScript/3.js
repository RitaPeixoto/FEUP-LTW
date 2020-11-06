/*let products = document.getElementById('products');
console.log(products);
Doesn't work this way, because the javascript code is being loaded and run before the DOM is completely loaded and ready.
*/


window.addEventListener('load',function(){
    let products = document.getElementById('products');
    console.log(products);
})


/*Another way of doing this is  <script src="script.js" defer></script> */