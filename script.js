if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}
function ready(){
    var removeButton = document.getElementsByClassName("btn-remove")
    // console.log(removeButton)
   for (var i=0; i< removeButton.length; i++){
    var button = removeButton[i]
    button.addEventListener('click', removeButtonItem)
}
 
var quantityInput = document.getElementsByClassName('add_button')
   for(var i=0; i< quantityInput.length; i++){
       var input = quantityInput[i]
       input.addEventListener('change',quantityChanged)
   }

    var addToCartButton = document.getElementsByClassName('button_cart')
    for(var i = 0; i < addToCartButton.length; i++){
        var button = addToCartButton[i]
        button.addEventListener('click', addToCartClicked)
    } 
}
function removeButtonItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value<=0){
        input.value = 1
    } 
    updateCartTotal()
}


// function updateCartTotal(){
//     var cartItemContainer = document.getElementsByClassName('')[0]
//     var cartRow = cartItemContainer.getElementsByClassName('')
//     var total = 0
//     for (var i=0; i< cartRow.length; i++){
//         var button = cartRow[i]
//         var priceElement = cartRow.getElementsByClassName('')[0]
//         var quantityElement = cartRow.getElementsByClassName('')[0]
//         var price =parseFloat(priceElement.innerText.replace('$',''))
//         var quantity = quantityElement.value
//         total = total + (price * quantity)
        
//     }
// }

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('label-text')[0].innerText
    var price = shopItem.getElementsByClassName('label_text_price')[0].innerText
    var image = shopItem.getElementsByClassName('product-img')[0].src
    console.log(title,price,image)
    addItemToCart(title, price, image);
}
function addItemToCart(title, price, image) {
    var cartRow = document.createElement('div')
    // cartRow.innerText = title
    cartRow.classList.add('cart_container')
    var cartItems = document.getElementsByClassName('cart_container')[0]
    var cartRowContents = ` 

            <img class="product_img" src="${image}" alt="img">
           <div class="product_name_box">
            <p class="product_name">${title}</p>
                <p  class="product_name">${price}</p>
           </div>
           
           <button class="plus button2">+</button>
           <div class="product_quantity_box">   
            <label class="label_text">Quantity</label>
            <input class="label_input" type="text" placeholder="number">
           </div>
            <button class="sub button2">-</button>
            `
    cartRow.innerHTML= cartRowContents
     cartItems.append(cartRow)
    
}  